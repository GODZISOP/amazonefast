'use client';
import { useEffect, useRef } from 'react';

export function GlobeVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Force play on mount just in case autoplay was blocked by the browser initially
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Silently ignore if autoplay policy blocks it
      });
    }
  }, []);

  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
      style={{
        // Filter to turn the purple/violet video into Amazon Orange!
        filter: "hue-rotate(120deg) saturate(1.5)"
      }}
    >
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: '51% 8%' }}
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
    </div>
  );
}
