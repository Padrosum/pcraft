// Tiny procedural sound effects — no audio assets needed.
import { config } from '../config.js';

let ctx = null;
let master = null;

function ac() {
  if (!ctx) {
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    master = ctx.createGain();
    master.connect(ctx.destination);
  }
  if (ctx.state === 'suspended') ctx.resume();
  return ctx;
}

// her çalmada anapılanımı ayarlar (ayar menüsü canlı etki eder)
function out(c) {
  master.gain.value = config.muted ? 0 : config.volume;
  return master;
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
  src.connect(filter).connect(g).connect(out(c));
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
  osc.connect(g).connect(out(c));
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
  hurt() {
    tone({ freq: jitter(320, 0.2), end: 150, dur: 0.16, type: 'sawtooth', gain: 0.14 });
  },
  mobHit() {
    noiseBurst({ dur: 0.07, freq: jitter(700), gain: 0.2 });
    tone({ freq: jitter(220), end: 130, dur: 0.08, type: 'square', gain: 0.08 });
  },
  mobDie() {
    tone({ freq: jitter(260, 0.2), end: 60, dur: 0.3, type: 'sawtooth', gain: 0.12 });
  },
  pig() {
    const f = jitter(420, 0.25);
    tone({ freq: f, end: f * 1.3, dur: 0.09, type: 'square', gain: 0.06 });
    setTimeout(() => tone({ freq: f * 1.1, end: f * 0.8, dur: 0.09, type: 'square', gain: 0.05 }), 90);
  },
  zombie() {
    tone({ freq: jitter(110, 0.3), end: 70, dur: jitter(0.4, 0.3), type: 'sawtooth', gain: 0.07 });
  },
  pop() {
    tone({ freq: jitter(500, 0.3), end: 900, dur: 0.08, type: 'square', gain: 0.07 });
  },
  eat() {
    noiseBurst({ dur: 0.09, freq: jitter(400, 0.3), q: 0.8, gain: 0.18, type: 'lowpass' });
    setTimeout(() => noiseBurst({ dur: 0.09, freq: jitter(350, 0.3), q: 0.8, gain: 0.15, type: 'lowpass' }), 120);
  },
  craft() {
    noiseBurst({ dur: 0.06, freq: jitter(800), gain: 0.15 });
    tone({ freq: jitter(300), end: 450, dur: 0.1, type: 'triangle', gain: 0.08 });
  },
  click() {
    tone({ freq: 700, end: 500, dur: 0.05, type: 'square', gain: 0.05 });
  },
  mobSound(kind) {
    if (kind === 'cow') {
      tone({ freq: jitter(160, 0.2), end: 110, dur: 0.35, type: 'sawtooth', gain: 0.08 });
    } else if (kind === 'sheep') {
      tone({ freq: jitter(500, 0.15), end: 480, dur: 0.3, type: 'sawtooth', gain: 0.05 });
    } else if (kind === 'chicken') {
      tone({ freq: jitter(800, 0.3), end: 600, dur: 0.08, type: 'square', gain: 0.05 });
      setTimeout(() => tone({ freq: jitter(750, 0.3), end: 550, dur: 0.08, type: 'square', gain: 0.05 }), 130);
    } else if (kind === 'hellhound') {
      tone({ freq: jitter(220, 0.3), end: 90, dur: 0.25, type: 'sawtooth', gain: 0.09 });
    } else if (kind === 'blaze') {
      noiseBurst({ dur: 0.3, freq: jitter(1600, 0.2), q: 0.6, gain: 0.05, type: 'highpass' });
    } else if (kind === 'wraith') {
      tone({ freq: jitter(90, 0.3), end: 60, dur: 0.5, type: 'sine', gain: 0.06 });
    }
  },
  portal() {
    tone({ freq: 200, end: 800, dur: 0.5, type: 'sine', gain: 0.12 });
    tone({ freq: 150, end: 600, dur: 0.6, type: 'triangle', gain: 0.08 });
  },
  heartbeat() {
    tone({ freq: 70, end: 45, dur: 0.12, type: 'sine', gain: 0.2 });
  },
};
