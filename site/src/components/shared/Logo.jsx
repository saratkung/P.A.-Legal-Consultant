import "./Logo.css";

export function Monogram({ size = 40 }) {
  return (
    <svg
      className="monogram"
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      aria-hidden="true"
    >
      <rect x="0.5" y="0.5" width="43" height="43" stroke="var(--gold)" strokeWidth="1" />
      <text
        x="22"
        y="30"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontSize="20"
        fill="var(--gold)"
      >
        PA
      </text>
    </svg>
  );
}

export default function Logo({ compact = false, showTagline = false }) {
  return (
    <div className={`logo ${compact ? "logo--compact" : ""}`}>
      <Monogram size={compact ? 32 : 40} />
      <div className="logo__text">
        <span className="logo__name">
          P.A. LEGAL
          <br />
          CONSULTANT CO., LTD.
        </span>
        {showTagline && (
          <span className="logo__tagline">COUNSEL · STRATEGY · SOLUTION</span>
        )}
      </div>
    </div>
  );
}
