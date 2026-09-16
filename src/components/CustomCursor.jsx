import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Only enable for desktop mice
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let isHovering = false;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

      const target = e.target;
      const isInteractive = target.closest('button, a, input, select, textarea, [role="button"], .glass-card-hover');
      if (isInteractive && !isHovering) {
        isHovering = true;
        ring.classList.add('scale-150', 'border-emerald-500', 'bg-emerald-500/10');
      } else if (!isInteractive && isHovering) {
        isHovering = false;
        ring.classList.remove('scale-150', 'border-emerald-500', 'bg-emerald-500/10');
      }
    };

    let animId;
    const loop = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      animId = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 bg-emerald-500 rounded-full pointer-events-none z-[100] transition-opacity duration-150 hidden md:block"
        style={{ willChange: 'transform' }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 border border-emerald-400/60 rounded-full pointer-events-none z-[99] transition-[transform,background-color,border-color] duration-150 hidden md:block"
        style={{ willChange: 'transform' }}
      />
    </>
  );
}
