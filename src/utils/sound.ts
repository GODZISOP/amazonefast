// Reusable Web Audio API tactile tap sound for UI interactions
let audioCtx: AudioContext | null = null;
let tapBuffer: AudioBuffer | null = null;
let lastSoundTime = 0;

// Initialize or get the AudioContext singleton
const getAudioContext = (): AudioContext | null => {
  if (typeof window === "undefined") return null;

  try {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;

    if (!AudioContextClass) return null;

    if (!audioCtx || audioCtx.state === "closed") {
      audioCtx = new AudioContextClass();
    }
    return audioCtx;
  } catch {
    return null;
  }
};

// Pre-render tactile dual-layer tap sound into an in-memory AudioBuffer for 0ms instantaneous playback
const getTapBuffer = (ctx: AudioContext): AudioBuffer => {
  if (tapBuffer) return tapBuffer;

  const sampleRate = ctx.sampleRate || 44100;
  const duration = 0.05; // 50ms total snappy duration
  const frameCount = Math.floor(sampleRate * duration);
  const buffer = ctx.createBuffer(1, frameCount, sampleRate);
  const data = buffer.getChannelData(0);

  for (let i = 0; i < frameCount; i++) {
    const t = i / sampleRate;

    // Layer 1: Warm tactile thump (pitch dropping 380 -> 75 Hz)
    const decay1 = Math.exp(-t * 70);
    const freq1 = 75 + (380 - 75) * Math.exp(-t * 60);
    const sample1 = Math.sin(2 * Math.PI * freq1 * t) * decay1 * 0.45;

    // Layer 2: Crisp mechanical click / snap (1600 -> 300 Hz)
    const decay2 = Math.exp(-t * 140);
    const freq2 = 300 + (1600 - 300) * Math.exp(-t * 110);
    const sample2 = Math.sin(2 * Math.PI * freq2 * t) * decay2 * 0.28;

    data[i] = sample1 + sample2;
  }

  tapBuffer = buffer;
  return buffer;
};

// Auto-warmup AudioContext and buffer on user interactions
if (typeof window !== "undefined") {
  const warmup = () => {
    try {
      const ctx = getAudioContext();
      if (ctx) {
        if (ctx.state === "suspended") {
          ctx.resume().catch(() => {});
        }
        getTapBuffer(ctx);
      }
    } catch {
      // ignore
    }
  };

  window.addEventListener("pointerdown", warmup, { passive: true });
  window.addEventListener("touchstart", warmup, { passive: true });
  window.addEventListener("keydown", warmup, { passive: true });
  window.addEventListener("mouseenter", warmup, { passive: true });
}

export const playTapSound = () => {
  try {
    if (typeof window === "undefined") return;

    // Allow ultra-snappy responsive taps (min 40ms debounce)
    const nowTime = Date.now();
    if (nowTime - lastSoundTime < 40) {
      return;
    }
    lastSoundTime = nowTime;

    const ctx = getAudioContext();
    if (!ctx) return;

    // Resume immediately in background if suspended (never block on promise!)
    if (ctx.state === "suspended") {
      ctx.resume().catch(() => {});
    }

    // Play instantly via AudioBufferSourceNode
    const buffer = getTapBuffer(ctx);
    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.connect(ctx.destination);
    source.start(0);
  } catch {
    // Gracefully handle browser audio restrictions
  }
};

