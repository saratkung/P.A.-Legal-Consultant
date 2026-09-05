const BUILDINGS = [
  { x: 0, w: 70, h: 180 },
  { x: 68, w: 46, h: 260 },
  { x: 112, w: 60, h: 140 },
  { x: 170, w: 40, h: 320 },
  { x: 208, w: 54, h: 200 },
  { x: 260, w: 34, h: 380 },
  { x: 292, w: 66, h: 230 },
  { x: 356, w: 44, h: 300 },
  { x: 398, w: 56, h: 170 },
  { x: 452, w: 38, h: 260 },
  { x: 940, w: 50, h: 220 },
  { x: 988, w: 40, h: 340 },
  { x: 1026, w: 60, h: 190 },
  { x: 1084, w: 44, h: 290 },
  { x: 1126, w: 56, h: 230 },
  { x: 1180, w: 36, h: 400 },
  { x: 1214, w: 60, h: 250 },
  { x: 1272, w: 42, h: 180 },
  { x: 1312, w: 58, h: 310 },
  { x: 1368, w: 46, h: 210 },
  { x: 1412, w: 64, h: 160 },
  { x: 1474, w: 50, h: 270 },
  { x: 1522, w: 40, h: 200 },
  { x: 1560, w: 40, h: 150 },
];

const BASE_Y = 620;

function windows(building, seed) {
  const cols = Math.max(2, Math.floor(building.w / 14));
  const rows = Math.max(3, Math.floor(building.h / 22));
  const lights = [];
  let i = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      i++;
      const lit = (seed + r * 7 + c * 3 + i) % 5 === 0;
      if (!lit) continue;
      lights.push(
        <rect
          key={`${building.x}-${r}-${c}`}
          x={building.x + 6 + c * 12}
          y={BASE_Y - building.h + 14 + r * 20}
          width="4"
          height="6"
          fill="var(--soft-gold)"
          opacity={0.35 + ((r + c) % 3) * 0.15}
        />
      );
    }
  }
  return lights;
}

export default function CitySilhouette({ className = "", variant = "fill" }) {
  const isLine = variant === "line";

  return (
    <svg
      className={`city-silhouette ${isLine ? "city-silhouette--line" : ""} ${className}`}
      viewBox="0 0 1600 720"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="bld-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#050f1a" />
          <stop offset="100%" stopColor="#0a1a2b" />
        </linearGradient>
      </defs>

      {/* landmark tapered tower, center */}
      <g fill={isLine ? "none" : undefined} stroke={isLine ? "var(--gold)" : undefined} strokeWidth={isLine ? 1 : undefined}>
        <rect x="700" y={BASE_Y - 560} width="90" height="560" fill={isLine ? "none" : "url(#bld-fade)"} />
        <rect x="712" y={BASE_Y - 610} width="66" height="50" fill={isLine ? "none" : "url(#bld-fade)"} />
        <rect x="722" y={BASE_Y - 645} width="46" height="35" fill={isLine ? "none" : "url(#bld-fade)"} />
        {!isLine && (
          <>
            <rect x="700" y={BASE_Y - 420} width="26" height="90" fill="var(--midnight-navy)" />
            <rect x="764" y={BASE_Y - 300} width="26" height="60" fill="var(--midnight-navy)" />
          </>
        )}
        {!isLine && windows({ x: 700, w: 90, h: 560 }, 3)}
      </g>

      {BUILDINGS.map((b) => (
        <g key={b.x}>
          <rect
            x={b.x}
            y={BASE_Y - b.h}
            width={b.w}
            height={b.h}
            fill={isLine ? "none" : "url(#bld-fade)"}
            stroke={isLine ? "var(--gold)" : "none"}
            strokeWidth={isLine ? 1 : 0}
          />
          {!isLine && windows(b, b.x)}
        </g>
      ))}

      <rect x="0" y={BASE_Y} width="1600" height={isLine ? 1 : 2} fill="var(--gold)" opacity={isLine ? 0.6 : 0.5} />
    </svg>
  );
}
