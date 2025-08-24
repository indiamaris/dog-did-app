import { Link } from "@tanstack/react-router";

type IconProps = {
  icon: React.ReactNode;
  to?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  "aria-label"?: string;
};

const Icon: React.FC<IconProps> = ({
  icon,
  to,
  onClick,
  className,
  "aria-label": ariaLabel,
}) =>
  to ? (
    <Link to={to} className={className} aria-label={ariaLabel}>
      {icon}
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