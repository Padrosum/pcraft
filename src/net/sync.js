import { joinRoom as joinNostr, selfId } from 'trystero/nostr';
import { joinRoom as joinMqtt } from 'trystero/mqtt';

export { selfId };

// Wires up Trystero rooms and their actions. The world is deterministic
// from a seed, so peers only exchange the seed + block-edit log ("state"),
// then incremental block edits and 10Hz positions.
//
// We join the same logical room over TWO independent signaling networks
// (public Nostr relays + public MQTT brokers): if one is blocked or down,
// peers still find each other over the other. selfId is shared, so the
// same peer may surface on both networks — events are deduped here
// (presence) or are naturally idempotent (state/pos/block).
export function connect(roomId, handlers) {
  const config = { appId: 'padrosum-pcraft-v1' };
  const rooms = [];
  for (const join of [joinNostr, joinMqtt]) {
    try {
      rooms.push(join(config, roomId));
    } catch (e) {
      console.warn('signaling strategy failed:', e);
    }
  }
  if (rooms.length === 0) {
    throw new Error('WebRTC bağlantısı kurulamadı (tarayıcı engelliyor olabilir)');
  }

  const presence = new Map(); // peerId -> Set of room indices
  const senders = { pos: [], blk: [], state: [], hello: [] };

  rooms.forEach((room, ri) => {
    const [sendPos, getPos] = room.makeAction('pos');
    const [sendBlock, getBlock] = room.makeAction('blk');
    const [sendState, getState] = room.makeAction('state');
    const [sendHello, getHello] = room.makeAction('hello');
    senders.pos.push(sendPos);
    senders.blk.push(sendBlock);
    senders.state.push(sendState);
    senders.hello.push(sendHello);

    room.onPeerJoin((peerId) => {
      let set = presence.get(peerId);
      if (!set) presence.set(peerId, (set = new Set()));
      set.add(ri);
      sendHello({ name: handlers.myName() }, peerId);
      const state = handlers.worldState();
      if (state) sendState(state, peerId);
    });

    room.onPeerLeave((peerId) => {
      const set = presence.get(peerId);
      set?.delete(ri);
      if (!set || set.size === 0) {
        presence.delete(peerId);
        handlers.onPeerLeave?.(peerId);
      }
    });

    getHello((data, peerId) => handlers.onHello?.(peerId, data));
    getState((data, peerId) => handlers.onState?.(data, peerId));
    getPos((data, peerId) => handlers.onPos?.(peerId, data));
    getBlock((data, peerId) => handlers.onBlock?.(data, peerId));
  });

  const sendAll = (list) => (data) => {
    for (const send of list) {
      try { send(data); } catch { /* one network down is fine */ }
    }
  };

  return {
    sendPos: sendAll(senders.pos),
    sendBlock: sendAll(senders.blk),
    peerCount: () => presence.size,
    leave: () => rooms.forEach((r) => r.leave()),
  };
}
