// Tiny procedural sound effects — no audio assets needed.
let ctx = null;

function ac() {
  if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
  if (ctx.state === 'suspended') ctx.resume();
  return ctx;
}

function noiseBurst({ dur = 0.1, freq = 800, q = 1, gain = 0.3, type = 'bandpass' }) {
  const c = ac();
  const len = Math.ceil(c.sampleRate * dur);
  const buf = c.createBuffer(1, len, c.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;

  const src = c.createBufferSource();
  src.buffer = buf;
  const filter = c.createBiquadFilter();
  filter.type = type;
  filter.frequency.value = freq;
  filter.Q.value = q;
  const g = c.createGain();
  g.gain.setValueAtTime(gain, c.currentTime);
  g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + dur);
  src.connect(filter).connect(g).connect(c.destination);
  src.start();
}

function tone({ freq = 220, end = null, dur = 0.1, type = 'square', gain = 0.12 }) {
  const c = ac();
  const osc = c.createOscillator();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, c.currentTime);
  if (end) osc.frequency.exponentialRampToValueAtTime(end, c.currentTime + dur);
  const g = c.createGain();
  g.gain.setValueAtTime(gain, c.currentTime);
  g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + dur);
  osc.connect(g).connect(c.destination);
  osc.start();
  osc.stop(c.currentTime + dur);
}

export const Sfx = {
  unlock() { ac(); }, // call on first user gesture
  dig(sound) {
    if (sound === 'hard') noiseBurst({ dur: 0.09, freq: 1400, gain: 0.25 });
    else if (sound === 'wood') noiseBurst({ dur: 0.1, freq: 600, q: 2, gain: 0.25 });
    else noiseBurst({ dur: 0.1, freq: 420, q: 0.8, gain: 0.28 });
  },
  place() {
    noiseBurst({ dur: 0.06, freq: 900, gain: 0.18 });
    tone({ freq: 180, end: 120, dur: 0.07, gain: 0.1 });
  },
  jump() {
    tone({ freq: 240, end: 380, dur: 0.09, type: 'sine', gain: 0.07 });
  },
  splash() {
    noiseBurst({ dur: 0.35, freq: 700, q: 0.5, gain: 0.3, type: 'lowpass' });
  },
  join() {
    tone({ freq: 440, end: 660, dur: 0.15, type: 'triangle', gain: 0.1 });
  },
  leave() {
    tone({ freq: 440, end: 280, dur: 0.18, type: 'triangle', gain: 0.1 });
  },
};
