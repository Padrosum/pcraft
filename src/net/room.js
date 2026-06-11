// Room id handling + per-room persistence in localStorage.

export function getRoomFromHash() {
  const m = location.hash.match(/r=([A-Za-z0-9_-]+)/);
  return m ? m[1] : null;
}

export function newRoomId() {
  const chars = 'abcdefghjkmnpqrstuvwxyz23456789';
  let id = '';
  for (let i = 0; i < 8; i++) id += chars[(Math.random() * chars.length) | 0];
  return id;
}

export function setRoomHash(id) {
  history.replaceState(null, '', `#r=${id}`);
}

export function roomLink(id) {
  return `${location.origin}${location.pathname}#r=${id}`;
}

const saveKey = (roomId) => `pcraft:save:${roomId}`;

export function loadSave(roomId) {
  try {
    const raw = localStorage.getItem(saveKey(roomId));
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function storeSave(roomId, { seed, edits, time }) {
  try {
    localStorage.setItem(saveKey(roomId), JSON.stringify({ seed, edits, time }));
  } catch {
    // storage full/blocked — persistence is best-effort
  }
}

export function loadName() {
  return localStorage.getItem('pcraft:name') || '';
}

export function storeName(name) {
  localStorage.setItem('pcraft:name', name);
}
