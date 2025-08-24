
import { Link } from "@tanstack/react-router";
import React = require("react");
type IconProps = {
  icon: React.ReactNode;
  to?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  ariaLabel?: string;
};

const Icon: React.FC<IconProps> = ({
  icon,
  to,
  onClick,
  className,
  ariaLabel,
}) =>
  to ? (
    <Link to={to} className={className} aria-label={ariaLabel}>
      {  <img src={icon} alt={`icon ${ariaLabel}`} />}
    </Link>
  ) : (
    <button
      type="button"
      onClick={onClick}
      className={className}
      aria-label={ariaLabel}
      style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
    >
      {icon}
    </button>
  );

export default Icon;