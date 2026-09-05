import "./GoldButton.css";

export default function GoldButton({
  children,
  href,
  onClick,
  variant = "outline",
  cursorHint = "button",
  className = "",
}) {
  const Tag = href ? "a" : "button";
  return (
    <Tag
      href={href}
      onClick={onClick}
      className={`gold-btn gold-btn--${variant} ${className}`}
      data-cursor={cursorHint}
    >
      {children}
    </Tag>
  );
}
