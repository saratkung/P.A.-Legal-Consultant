import paMonogram from "../../assets/images/pa-monogram-light.png";
import "./Logo.css";

export function Monogram({ size = 40 }) {
  return (
    <img
      src={paMonogram}
      alt="P.A."
      className="monogram"
      style={{ height: size }}
      aria-hidden="true"
    />
  );
}

export default function Logo({ compact = false, showTagline = false }) {
  return (
    <div className={`logo ${compact ? "logo--compact" : ""}`}>
      <Monogram size={compact ? 26 : 34} />
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
