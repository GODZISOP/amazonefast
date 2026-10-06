"use client";
import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { useSpring } from "framer-motion";

export function CobeGlobe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  

  const r = useSpring(0, {
    mass: 1,
    stiffness: 280,
    damping: 40,
  });

  useEffect(() => {
    let phi = 0;
    
    // Default size fallback if offsetWidth is 0
    let width = canvasRef.current ? canvasRef.current.offsetWidth : 800;
    if (width === 0) width = 800; 

    const onResize = () => {
      if (canvasRef.current && canvasRef.current.offsetWidth > 0) {
        width = canvasRef.current.offsetWidth;
      }
    };
    window.addEventListener('resize', onResize);
    onResize();
    
    if (!canvasRef.current) return;

    const options: any = {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1, // 1 is dark mode
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      // Color #ff6b35 -> rgb(255, 107, 53) -> [1, 0.42, 0.21]
      baseColor: [1, 0.42, 0.21],
      markerColor: [1, 1, 1],
      glowColor: [1, 0.42, 0.21],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
        { location: [51.5072, 0.1276], size: 0.08 },
        { location: [25.2048, 55.2708], size: 0.05 },
      ],
      onRender: (state: any) => {
        if (!pointerInteracting.current) {
          phi += 0.005;
        }
        state.phi = phi + r.get();
        state.width = width * 2;
        state.height = width * 2;
      }
    };
    const globe = createGlobe(canvasRef.current, options);
    
    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, [r]);

  return (
    <div className={className} style={{ width: '100%', maxWidth: '800px', aspectRatio: 1, position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto' }}>
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
          if (canvasRef.current) canvasRef.current.style.cursor = 'grabbing';
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) canvasRef.current.style.cursor = 'grab';
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) canvasRef.current.style.cursor = 'grab';
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            r.set(delta / 200);
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            r.set(delta / 100);
          }
        }}
        style={{
          width: '100%',
          height: '100%',
          aspectRatio: '1 / 1',
          cursor: 'grab',
          contain: 'layout paint size',
          opacity: 1,
          transition: 'opacity 1s ease',
        }}
      />
    </div>
  );
}
