// Rubber-stamp style badge. Rotated, uppercase, pressed border.
export const Stamp = ({
  children,
  accent = false,
  rotate = -8,
  className = "",
  ...rest
}) => {
  const color = accent ? "var(--spot-600)" : "var(--ink-900)";
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border-2 px-3.5 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] ${className}`}
      style={{
        color,
        borderColor: color,
        transform: `rotate(${rotate}deg)`,
        background: accent ? "rgba(18,166,107,0.08)" : "transparent",
        boxShadow: "inset 0 0 0 1px rgba(17,17,15,0.18)",
      }}
      {...rest}
    >
      {children}
    </span>
  );
};
