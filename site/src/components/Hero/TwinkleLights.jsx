import { useState } from "react";
import "./TwinkleLights.css";

function rand(min, max) {
  return min + Math.random() * (max - min);
}

function makeDots() {
  const dots = [];

  // building windows — brighter, livelier twinkle, concentrated over the tower/skyline
  for (let i = 0; i < 70; i++) {
    dots.push({
      key: `b${i}`,
      left: rand(36, 98),
      top: rand(22, 79),
      size: rand(1.8, 3.8),
      duration: rand(2.2, 5),
      delay: rand(0, 6),
      peak: rand(0.65, 1),
      kind: "warm",
    });
  }

  // a handful of standout sparkle highlights — bigger, brighter pops
  for (let i = 0; i < 10; i++) {
    dots.push({
      key: `s${i}`,
      left: rand(40, 97),
      top: rand(26, 72),
      size: rand(3.6, 5.5),
      duration: rand(2.8, 4.5),
      delay: rand(0, 8),
      peak: 1,
      kind: "bright",
    });
  }

  // water reflections — dimmer, slower shimmer, lower band
  for (let i = 0; i < 30; i++) {
    dots.push({
      key: `w${i}`,
      left: rand(28, 96),
      top: rand(79, 95),
      size: rand(1.6, 3.4),
      duration: rand(3.2, 6.5),
      delay: rand(0, 7),
      peak: rand(0.35, 0.65),
      kind: "cool",
    });
  }

  return dots;
}

export default function TwinkleLights({ className = "" }) {
  const [dots] = useState(makeDots);

  return (
    <div className={`twinkle-lights ${className}`} aria-hidden="true">
      {dots.map((d) => (
        <span
          key={d.key}
          className={`twinkle-dot twinkle-dot--${d.kind}`}
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: `${d.size}px`,
            height: `${d.size}px`,
            animationDuration: `${d.duration}s`,
            animationDelay: `${d.delay}s`,
            "--peak": d.peak,
          }}
        />
      ))}
    </div>
  );
}
