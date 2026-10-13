// Reusable Web Audio API tactile tap sound for UI interactions
let audioCtx: AudioContext | null = null;
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

// Auto-warmup AudioContext on the very first user interaction anywhere on the page
if (typeof window !== "undefined") {
  const warmup = () => {
    try {
      const ctx = getAudioContext();
      if (ctx && ctx.state === "suspended") {
        ctx.resume();
      }
    } catch {
      // ignore
    }
  };

  window.addEventListener("pointerdown", warmup, { once: true, passive: true });
  window.addEventListener("touchstart", warmup, { once: true, passive: true });
  window.addEventListener("keydown", warmup, { once: true, passive: true });
}

// Generate the tactile dual-layer tap sound
const triggerTone = (ctx: AudioContext) => {
  try {
    const now = ctx.currentTime;

    // Primary Layer: Warm tactile "thud/tap"
    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(360, now);
    osc.frequency.exponentialRampToValueAtTime(70, now + 0.045);

    oscGain.gain.setValueAtTime(0.35, now);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

    osc.connect(oscGain);
    oscGain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.055);

    // Secondary Layer: Crisp tactile snap
    const clickOsc = ctx.createOscillator();
    const clickGain = ctx.createGain();

    clickOsc.type = "triangle";
    clickOsc.frequency.setValueAtTime(1500, now);
    clickOsc.frequency.exponentialRampToValueAtTime(250, now + 0.025);

    clickGain.gain.setValueAtTime(0.2, now);
    clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);

    clickOsc.connect(clickGain);
    clickGain.connect(ctx.destination);

    clickOsc.start(now);
    clickOsc.stop(now + 0.035);
  } catch {
    // ignore
  }
};

export const playTapSound = () => {
  try {
    if (typeof window === "undefined") return;

    // Prevent double firing when rapid events (e.g. focus and click) happen together
    const nowTime = Date.now();
    if (nowTime - lastSoundTime < 120) {
      return;
    }
    lastSoundTime = nowTime;

    const ctx = getAudioContext();
    if (!ctx) return;

    // If browser started context in suspended mode, resume first then play
    if (ctx.state === "suspended") {
      ctx.resume().then(() => {
        triggerTone(ctx);
      }).catch(() => {
        // Fallback attempt
        triggerTone(ctx);
      });
    } else {
      triggerTone(ctx);
    }
  } catch {
    // Gracefully handle browser audio restrictions
  }
};
