export default function TempleLineArt({ className = "" }) {
  return (
    <svg
      className={`temple-line-art ${className}`}
      viewBox="0 0 220 200"
      fill="none"
      stroke="var(--gold)"
      strokeWidth="1"
      aria-hidden="true"
    >
      {/* central prang */}
      <path d="M100 10 L100 30 M92 30 L108 30 M96 30 L96 46 L104 46 L104 30 M88 46 L112 46 L106 60 L94 60 Z M82 60 L118 60 L108 80 L92 80 Z M75 80 L125 80 L112 108 L88 108 Z" />
      {/* left minor stupa */}
      <path d="M30 60 L30 72 M22 72 L38 72 L34 84 L26 84 Z M18 84 L42 84 L36 108 L24 108 Z" />
      {/* right minor stupa */}
      <path d="M170 60 L170 72 M162 72 L178 72 L174 84 L166 84 Z M158 84 L182 84 L176 108 L164 108 Z" />
      {/* base line connecting tiers */}
      <path d="M0 108 L220 108" />
      <path d="M10 130 L210 130" opacity="0.6" />
    </svg>
  );
}
