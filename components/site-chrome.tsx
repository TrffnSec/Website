"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const nav = [
  ["Home", "/"],
  ["Research", "/posts"],
  ["Hall of fame", "/hall-of-fame"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Resources", "/resources"],
];

function AmbientCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let frame = 0;
    let pointerX = -1000;
    let pointerY = -1000;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const particles: { x: number; y: number; vx: number; vy: number; r: number }[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      particles.length = 0;
      const count = width < 760 ? 26 : 58;
      for (let i = 0; i < count; i += 1) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          r: Math.random() * 1.2 + 0.35,
        });
      }
    };

    const onPointer = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      const nx = event.clientX / Math.max(width, 1) - 0.5;
      const ny = event.clientY / Math.max(height, 1) - 0.5;
      document.documentElement.style.setProperty("--pointer-x", nx.toFixed(3));
      document.documentElement.style.setProperty("--pointer-y", ny.toFixed(3));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];
        if (!reduced) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < -20) p.x = width + 20;
          if (p.x > width + 20) p.x = -20;
          if (p.y < -20) p.y = height + 20;
          if (p.y > height + 20) p.y = -20;
        }
        ctx.beginPath();
        ctx.fillStyle = "rgba(135,255,40,.33)";
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j += 1) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 115) {
            ctx.strokeStyle = `rgba(117, 255, 42, ${0.055 * (1 - dist / 115)})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
        const pd = Math.hypot(p.x - pointerX, p.y - pointerY);
        if (pd < 145) {
          ctx.strokeStyle = `rgba(101, 255, 28, ${0.15 * (1 - pd / 145)})`;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(pointerX, pointerY);
          ctx.stroke();
        }
      }
      if (!reduced) frame = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointer, { passive: true });
    draw();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);

  return <canvas className="ambient-canvas" ref={canvasRef} aria-hidden="true" />;
}

export function SiteChrome({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onPointer = (event: PointerEvent) => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      }
    };
    window.addEventListener("pointermove", onPointer, { passive: true });
    return () => window.removeEventListener("pointermove", onPointer);
  }, []);

  return (
    <div className="site-frame">
      <AmbientCanvas />
      <div className="cursor-glow" ref={glowRef} aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="/" aria-label="TrffnSec home">
          <span className="brand-mark">T/</span>
          <span className="brand-word">TRFFNSEC</span>
        </a>
        <nav className={`nav-links ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          {nav.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a className="nav-contact" href="mailto:trffnsec@gmail.com" onClick={() => setMenuOpen(false)}>
            CONNECT <span>↗</span>
          </a>
        </nav>
        <button
          className={`menu-button ${menuOpen ? "is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span />
        </button>
      </header>
      <div className="page-layer">
        {children}
        <footer className="site-footer">
          <div className="footer-top">
            <a className="footer-brand" href="/"><span>T/</span><strong>TRFFNSEC</strong></a>
            <p>OFFENSIVE WEB SECURITY RESEARCHER<br />PENTESTER / BUG BOUNTY HUNTER / TRAINER</p>
            <a className="footer-mail" href="mailto:trffnsec@gmail.com">LET&apos;S CONNECT ↗</a>
          </div>
          <div className="footer-bottom">
            <span>© 2026 TRFFNSEC</span>
            <div>
              <a href="https://github.com/trffnsec" target="_blank" rel="noreferrer">GITHUB</a>
              <a href="https://x.com/trffnsec" target="_blank" rel="noreferrer">X</a>
              <a href="https://medium.com/@trffnsec" target="_blank" rel="noreferrer">MEDIUM</a>
              <a href="https://www.linkedin.com/in/trffnsec" target="_blank" rel="noreferrer">LINKEDIN</a>
              <a href="https://instagram.com/trff.in" target="_blank" rel="noreferrer">INSTAGRAM</a>
            </div>
            <span>BUILD / BREAK / SHARE</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
