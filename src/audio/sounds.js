// Tiny procedural sound effects — no audio assets needed.
let ctx = null;

function ac() {
  if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
  if (ctx.state === 'suspended') ctx.resume();
  return ctx;
}

// small random detune so repeated sounds don't feel machine-like
const jitter = (v, amount = 0.15) => v * (1 + (Math.random() * 2 - 1) * amount);

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
    if (sound === 'hard') noiseBurst({ dur: 0.09, freq: jitter(1400), gain: 0.25 });
    else if (sound === 'wood') noiseBurst({ dur: 0.1, freq: jitter(600), q: 2, gain: 0.25 });
    else noiseBurst({ dur: 0.1, freq: jitter(420), q: 0.8, gain: 0.28 });
  },
  place() {
    noiseBurst({ dur: 0.06, freq: jitter(900), gain: 0.18 });
    tone({ freq: jitter(180), end: 120, dur: 0.07, gain: 0.1 });
  },
  // footsteps, voiced by the material walked on
  step(sound) {
    if (sound === 'hard') {
      noiseBurst({ dur: 0.05, freq: jitter(1100, 0.25), q: 1.4, gain: 0.09 });
    } else if (sound === 'wood') {
      noiseBurst({ dur: 0.07, freq: jitter(480, 0.2), q: 2.5, gain: 0.1 });
      tone({ freq: jitter(140), end: 90, dur: 0.05, type: 'sine', gain: 0.04 });
    } else {
      // grass/dirt/sand: soft muffled crunch
      noiseBurst({ dur: 0.08, freq: jitter(320, 0.25), q: 0.7, gain: 0.11, type: 'lowpass' });
    }
  },
  swim() {
    noiseBurst({ dur: jitter(0.22, 0.3), freq: jitter(550, 0.3), q: 0.6, gain: 0.12, type: 'lowpass' });
  },
  jump() {
    tone({ freq: 240, end: 380, dur: 0.09, type: 'sine', gain: 0.07 });
  },
  land() {
    noiseBurst({ dur: 0.07, freq: jitter(280), q: 0.6, gain: 0.12, type: 'lowpass' });
  },
  splash() {
    noiseBurst({ dur: 0.35, freq: 700, q: 0.5, gain: 0.3, type: 'lowpass' });
    noiseBurst({ dur: 0.5, freq: 300, q: 0.4, gain: 0.15, type: 'lowpass' });
  },
  join() {
    tone({ freq: 440, end: 660, dur: 0.15, type: 'triangle', gain: 0.1 });
  },
  leave() {
    tone({ freq: 440, end: 280, dur: 0.18, type: 'triangle', gain: 0.1 });
  },
};
