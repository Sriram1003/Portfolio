import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Cursor = () => {
  const cursorRef = useRef(null);
  const trailRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = trailRef.current;
    const glow = glowRef.current;

    let mouseX = -200, mouseY = -200;
    let trailX = -200, trailY = -200;
    let velX = 0, velY = 0;
    let prevX = -200, prevY = -200;
    let tiltAngle = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      velX = e.clientX - prevX;
      velY = e.clientY - prevY;
      prevX = e.clientX;
      prevY = e.clientY;

      // Tilt the arrow in direction of movement
      const angle = Math.atan2(velY, velX) * (180 / Math.PI);
      tiltAngle = angle;
    };

    const onMouseDown = () => {
      gsap.to(cursor, { scale: 0.75, duration: 0.15, ease: 'power2.out' });
      gsap.to(glow, { opacity: 0.8, scale: 1.5, duration: 0.2 });
    };

    const onMouseUp = () => {
      gsap.to(cursor, { scale: 1, duration: 0.25, ease: 'elastic.out(1, 0.5)' });
      gsap.to(glow, { opacity: 0.25, scale: 1, duration: 0.3 });
    };

    const onEnterInteractive = () => {
      gsap.to(cursor, { scale: 1.3, duration: 0.3, ease: 'power2.out' });
      gsap.to(trail, { width: 55, height: 55, borderColor: 'rgba(201,165,90,0.9)', duration: 0.3 });
      gsap.to(glow, { opacity: 0.5, scale: 1.3, duration: 0.3 });
    };

    const onLeaveInteractive = () => {
      gsap.to(cursor, { scale: 1, duration: 0.3, ease: 'power2.out' });
      gsap.to(trail, { width: 36, height: 36, borderColor: 'rgba(201,165,90,0.35)', duration: 0.3 });
      gsap.to(glow, { opacity: 0.25, scale: 1, duration: 0.3 });
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    // Attach to all interactive elements
    const interactiveEls = document.querySelectorAll('a, button, [onClick], .project-card, .service-card, .nav-link, .filter-btn');
    interactiveEls.forEach(el => {
      el.addEventListener('mouseenter', onEnterInteractive);
      el.addEventListener('mouseleave', onLeaveInteractive);
    });

    const speed = 0.13;
    const animate = () => {
      // Smooth trail follow
      trailX += (mouseX - trailX) * speed;
      trailY += (mouseY - trailY) * speed;

      // Direct position for cursor arrow
      gsap.set(cursor, { x: mouseX - 6, y: mouseY - 4 });
      gsap.set(trail, { x: trailX - 18, y: trailY - 18 });
      gsap.set(glow, { x: mouseX - 20, y: mouseY - 20 });

      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      interactiveEls.forEach(el => {
        el.removeEventListener('mouseenter', onEnterInteractive);
        el.removeEventListener('mouseleave', onLeaveInteractive);
      });
    };
  }, []);

  return (
    <>
      {/* Soft glow underneath */}
      <div
        ref={glowRef}
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: 40, height: 40,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,165,90,0.55) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 9996,
          opacity: 0.25,
          filter: 'blur(6px)',
          willChange: 'transform',
        }}
      />

      {/* Lagging orbit ring */}
      <div
        ref={trailRef}
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: 36, height: 36,
          border: '1px solid rgba(201,165,90,0.35)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9997,
          willChange: 'transform',
          backdropFilter: 'blur(0px)',
        }}
      />

      {/* 3D Golden Arrow Cursor */}
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          top: 0, left: 0,
          pointerEvents: 'none',
          zIndex: 9999,
          willChange: 'transform',
          filter: 'drop-shadow(0 4px 10px rgba(201,165,90,0.7)) drop-shadow(0 2px 4px rgba(0,0,0,0.8))',
        }}
      >
        <svg
          width="28"
          height="34"
          viewBox="0 0 28 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: 'block' }}
        >
          <defs>
            {/* Main 3D gold gradient — light upper-left to dark lower-right */}
            <linearGradient id="arrowGold3D" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%"   stopColor="#f5e17a" />
              <stop offset="20%"  stopColor="#e8c56a" />
              <stop offset="50%"  stopColor="#c9a55a" />
              <stop offset="80%"  stopColor="#9c7a35" />
              <stop offset="100%" stopColor="#7a5c20" />
            </linearGradient>

            {/* Edge bevel highlight */}
            <linearGradient id="arrowHighlight" x1="0%" y1="0%" x2="60%" y2="100%">
              <stop offset="0%"   stopColor="#fffbe0" stopOpacity="0.9" />
              <stop offset="40%"  stopColor="#f5e17a" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#c9a55a" stopOpacity="0" />
            </linearGradient>

            {/* Dark shadow side */}
            <linearGradient id="arrowShadow" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%"   stopColor="#3a2800" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#1a1000" stopOpacity="0" />
            </linearGradient>

            {/* Tail gradient */}
            <linearGradient id="tailGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%"   stopColor="#c9a55a" />
              <stop offset="100%" stopColor="#7a5c20" />
            </linearGradient>

            <filter id="innerGlow">
              <feGaussianBlur stdDeviation="0.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/*
            Arrow pointer shape:
            - Classic arrow head pointing top-left (standard cursor angle)
            - Tail extends to the lower-right
          */}

          {/* Base arrow shape — main gold fill */}
          <path
            d="M2 2 L2 26 L8.5 19.5 L14 30 L17.5 28.5 L12 18 L21 18 Z"
            fill="url(#arrowGold3D)"
          />

          {/* Highlight overlay on top-left face (lit side) */}
          <path
            d="M2 2 L2 26 L8.5 19.5 L14 30 L17.5 28.5 L12 18 L21 18 Z"
            fill="url(#arrowHighlight)"
          />

          {/* Shadow overlay on bottom-right (dark side for 3D depth) */}
          <path
            d="M2 2 L21 18 L12 18 L17.5 28.5 L14 30 L8.5 19.5 L2 26 Z"
            fill="url(#arrowShadow)"
          />

          {/* Sharp left edge — bright bevel line */}
          <line x1="2" y1="2" x2="2" y2="26" stroke="#fffbe0" strokeWidth="1.2" strokeOpacity="0.8" strokeLinecap="round" />

          {/* Top edge — bright tip highlight */}
          <line x1="2" y1="2" x2="21" y2="18" stroke="#fffbe0" strokeWidth="0.8" strokeOpacity="0.5" strokeLinecap="round" />

          {/* Outline for crisp edge */}
          <path
            d="M2 2 L2 26 L8.5 19.5 L14 30 L17.5 28.5 L12 18 L21 18 Z"
            fill="none"
            stroke="rgba(100,70,0,0.6)"
            strokeWidth="0.5"
            strokeLinejoin="round"
          />

          {/* Inner detail line for dimension */}
          <path
            d="M2 14 L10 18 L12 18"
            stroke="rgba(255,235,120,0.3)"
            strokeWidth="0.6"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </>
  );
};

export default Cursor;
