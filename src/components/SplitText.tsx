'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const SplitText = ({
  text = "",
  className = '',
  delay = 50,
  duration = 1.25,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  tag = 'p',
  onLetterAnimationComplete
}: any) => {
  const containerRef = useRef<any>(null);
  const animationCompletedRef = useRef(false);
  const onCompleteRef = useRef(onLetterAnimationComplete);

  useEffect(() => {
    onCompleteRef.current = onLetterAnimationComplete;
  }, [onLetterAnimationComplete]);

  useGSAP(
    () => {
      if (!containerRef.current || !text) return;

      const el = containerRef.current;
      
      const startPct = (1 - threshold) * 100;
      const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
      const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
      const marginUnit = marginMatch ? (marginMatch[2] || 'px') : 'px';
      const sign = marginValue === 0 ? '' : marginValue < 0 ? `-=${Math.abs(marginValue)}${marginUnit}` : `+=${marginValue}${marginUnit}`;
      const start = `top ${startPct}%${sign}`;

      let targets: any[] = [];
      if (splitType === 'chars') {
        targets = gsap.utils.toArray('.split-char', el);
      } else if (splitType === 'words') {
        targets = gsap.utils.toArray('.split-word', el);
      } else {
        targets = gsap.utils.toArray('.split-char', el);
      }

      if (targets.length === 0) return;

      gsap.fromTo(
        targets,
        { ...from },
        {
          ...to,
          duration,
          ease,
          stagger: delay / 1000,
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: 'play none none reverse',
            fastScrollEnd: true,
          },
          onComplete: () => {
            onCompleteRef.current?.();
          },
          willChange: 'transform, opacity',
        }
      );
    },
    {
      dependencies: [text, delay, duration, ease, splitType, JSON.stringify(from), JSON.stringify(to), threshold, rootMargin],
      scope: containerRef
    }
  );

  const Tag = tag as any;
  
  const renderText = () => {
    if (splitType === 'words') {
      return text.split(' ').map((word: string, i: number) => (
        <span key={i} className="split-word inline-block whitespace-pre">
          {word}{' '}
        </span>
      ));
    }
    
    return text.split(' ').map((word: string, wordIdx: number) => (
      <span key={wordIdx} className="split-word inline-block whitespace-pre">
        {word.split('').map((char: string, charIdx: number) => (
          <span key={charIdx} className="split-char inline-block">
            {char}
          </span>
        ))}
        {' '}
      </span>
    ));
  };

  return (
    <Tag ref={containerRef} className={`split-parent ${className}`} style={{ display: 'inline-block' }}>
      {renderText()}
    </Tag>
  );
};

export default SplitText;
