import { joinRoom, selfId } from 'trystero';

export { selfId };

// Wires up the Trystero room and its actions. The world is deterministic
// from a seed, so peers only exchange the seed + block-edit log ("state"),
// then incremental block edits and 10Hz positions.
export function connect(roomId, handlers) {
  const room = joinRoom({ appId: 'padrosum-pcraft-v1' }, roomId);

  const [sendPos, getPos] = room.makeAction('pos');
  const [sendBlock, getBlock] = room.makeAction('blk');
  const [sendState, getState] = room.makeAction('state');
  const [sendHello, getHello] = room.makeAction('hello');

  room.onPeerJoin((peerId) => {
    sendHello({ name: handlers.myName() }, peerId);
    const state = handlers.worldState();
    if (state) sendState(state, peerId);
    handlers.onPeerJoin?.(peerId);
  });

  room.onPeerLeave((peerId) => handlers.onPeerLeave?.(peerId));

  getHello((data, peerId) => handlers.onHello?.(peerId, data));
  getState((data, peerId) => handlers.onState?.(data, peerId));
  getPos((data, peerId) => handlers.onPos?.(peerId, data));
  getBlock((data, peerId) => handlers.onBlock?.(data, peerId));

  return {
    sendPos,
    sendBlock,
    leave: () => room.leave(),
    peerCount: () => Object.keys(room.getPeers()).length,
  };
}
