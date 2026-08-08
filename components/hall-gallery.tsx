"use client";

import { useRef, useState, type CSSProperties } from "react";
import { certifications } from "../lib/content";

export function HallGallery() {
  const [active, setActive] = useState(2);
  const pointerStart = useRef<number | null>(null);

  const move = (direction: number) => {
    setActive((current) => (current + direction + certifications.length) % certifications.length);
  };

  return (
    <div className="hof-gallery-wrap">
      <div
        className="hof-gallery"
        onPointerDown={(event) => { pointerStart.current = event.clientX; }}
        onPointerUp={(event) => {
          if (pointerStart.current === null) return;
          const distance = event.clientX - pointerStart.current;
          if (Math.abs(distance) > 45) move(distance < 0 ? 1 : -1);
          pointerStart.current = null;
        }}
      >
        {certifications.map((cert, index) => {
          let offset = index - active;
          const half = Math.floor(certifications.length / 2);
          if (offset > half) offset -= certifications.length;
          if (offset < -half) offset += certifications.length;
          const distance = Math.abs(offset);
          const style = {
            transform: `translateX(${offset * 58}%) translateZ(${-distance * 130}px) rotateY(${offset * -18}deg) scale(${1 - distance * 0.075})`,
            zIndex: 20 - distance,
            opacity: distance > 1 ? 0.28 : distance === 1 ? 0.58 : 1,
            filter: distance ? `saturate(${1 - distance * 0.25}) brightness(${1 - distance * 0.18})` : "none",
            pointerEvents: offset === 0 ? "auto" : "none",
          } as CSSProperties;
          return (
            <article className={`hof-card ${offset === 0 ? "is-active" : ""}`} style={style} key={cert.title} aria-hidden={offset !== 0}>
              <div className="hof-card-image">
                <img src={cert.image} alt={cert.title} loading="lazy" />
                <span className="hof-scan-line" aria-hidden="true" />
                <span className="hof-card-index">0{index + 1}</span>
              </div>
              <div className="hof-card-copy">
                <div className="hof-issuer"><i />{cert.issuer}</div>
                <h2>{cert.title}</h2>
                <p>{cert.description}</p>
              </div>
            </article>
          );
        })}
      </div>

      <div className="hof-controls">
        <button type="button" onClick={() => move(-1)} aria-label="Previous achievement">←</button>
        <div className="hof-counter"><strong>0{active + 1}</strong><span>/ 0{certifications.length}</span></div>
        <div className="hof-dots" aria-label="Achievement selection">
          {certifications.map((cert, index) => (
            <button
              type="button"
              className={active === index ? "is-active" : ""}
              key={cert.title}
              aria-label={`Show ${cert.title}`}
              aria-pressed={active === index}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
        <button type="button" onClick={() => move(1)} aria-label="Next achievement">→</button>
      </div>
    </div>
  );
}
