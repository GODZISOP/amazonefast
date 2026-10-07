'use client';
import { useEffect, useRef } from 'react';

export function GlobeVideo() {
  const videoARef = useRef<HTMLVideoElement>(null);
  const videoBRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoA = videoARef.current;
    const videoB = videoBRef.current;
    
    // Check for reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      if (videoA) {
        videoA.removeAttribute('autoplay');
        videoA.pause();
        try { videoA.currentTime = 0; } catch (e) {}
      }
      if (videoB) videoB.pause();
      return;
    }

    if (!videoA || !videoB) return;

    let swapping = false;
    const FADE = 0.9;
    let cur = videoA;
    let nxt = videoB;

    const playSafe = (v: HTMLVideoElement) => {
      const p = v.play();
      if (p !== undefined) {
        p.catch(() => {});
      }
    };

    playSafe(videoA);

    const tick = () => {
      if (swapping || !cur.duration) return;
      if (cur.duration - cur.currentTime > FADE) return;

      swapping = true;
      const out = cur;
      nxt.currentTime = 0;
      playSafe(nxt);
      
      nxt.style.opacity = '1';
      out.style.opacity = '0';
      
      const temp = cur;
      cur = nxt;
      nxt = temp;

      setTimeout(() => {
        out.pause();
        out.currentTime = 0;
        swapping = false;
      }, FADE * 1000 + 100);
    };

    videoA.addEventListener('timeupdate', tick);
    videoB.addEventListener('timeupdate', tick);

    return () => {
      videoA.removeEventListener('timeupdate', tick);
      videoB.removeEventListener('timeupdate', tick);
    };
  }, []);

  return (
    <div 
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
      style={{
        // Filter to turn the purple/violet video into Amazon Orange!
        // Purple hue is ~270. Orange is ~30. 270 + 120 = 390 (30).
        filter: "hue-rotate(120deg) saturate(1.5)"
      }}
    >
      <video
        ref={videoARef}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: '51% 8%', transition: 'opacity 0.9s linear', opacity: 1 }}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260912_104036_bd6924f6-3c8e-417e-8465-6d03c8c2e9e6.mp4"
        poster="https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/82e7eb75-c65f-490a-99b5-f3d1cad54200.webp"
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        aria-hidden="true"
        autoPlay
      />
      <video
        ref={videoBRef}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: '51% 8%', transition: 'opacity 0.9s linear', opacity: 0 }}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260912_104036_bd6924f6-3c8e-417e-8465-6d03c8c2e9e6.mp4"
        poster="https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/82e7eb75-c65f-490a-99b5-f3d1cad54200.webp"
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        aria-hidden="true"
      />
    </div>
  );
}
