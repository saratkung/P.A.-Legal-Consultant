import { useEffect, useRef, useState } from "react";
import "./MagneticCursor.css";

export default function MagneticCursor() {
  const dotRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [hint, setHint] = useState(null);

  useEffect(() => {
    const supportsCursor = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
    setEnabled(supportsCursor);
    if (!supportsCursor) return;

    document.body.classList.add("has-custom-cursor");

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let curX = x;
    let curY = y;
    let raf;

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      const target = e.target.closest("[data-cursor]");
      setHint(target ? target.getAttribute("data-cursor") : null);
    };

    const tick = () => {
      curX += (x - curX) * 0.18;
      curY += (y - curY) * 0.18;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${curX}px, ${curY}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      document.body.classList.remove("has-custom-cursor");
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={dotRef}
      className={`cursor-dot ${hint ? `cursor-dot--${hint}` : ""}`}
      aria-hidden="true"
    >
      {hint === "button" && <span className="cursor-dot__glyph">→</span>}
      {hint === "service" && <span className="cursor-dot__glyph">VIEW</span>}
      {hint === "image" && <span className="cursor-dot__glyph">EXPLORE</span>}
    </div>
  );
}
