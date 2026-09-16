import { Link } from "react-router-dom";
import "./GoldButton.css";

export default function GoldButton({
  children,
  href,
  to,
  onClick,
  variant = "outline",
  cursorHint = "button",
  className = "",
}) {
  const sharedProps = {
    onClick,
    className: `gold-btn gold-btn--${variant} ${className}`,
    "data-cursor": cursorHint,
  };

  if (to) {
    return (
      <Link to={to} {...sharedProps}>
        {children}
      </Link>
    );
  }

  const Tag = href ? "a" : "button";
  return (
    <Tag href={href} {...sharedProps}>
      {children}
    </Tag>
  );
}
