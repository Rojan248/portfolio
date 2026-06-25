// Decorative corner crop marks. Purely visual.
export const CropMarks = ({ className = "", accent = false }) => {
  const stroke = accent ? "var(--spot-500)" : "rgba(17,17,15,0.55)";
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className}`}
    >
      <span className="absolute left-2 top-2">
        <span className="absolute block" style={{ width: 18, height: 2, background: stroke }} />
        <span className="absolute block" style={{ width: 2, height: 18, background: stroke }} />
      </span>
      <span className="absolute right-2 top-2">
        <span className="absolute right-0 block" style={{ width: 18, height: 2, background: stroke }} />
        <span className="absolute right-0 block" style={{ width: 2, height: 18, background: stroke }} />
      </span>
      <span className="absolute bottom-2 left-2">
        <span className="absolute bottom-0 block" style={{ width: 18, height: 2, background: stroke }} />
        <span className="absolute bottom-0 block" style={{ width: 2, height: 18, background: stroke }} />
      </span>
      <span className="absolute bottom-2 right-2">
        <span className="absolute bottom-0 right-0 block" style={{ width: 18, height: 2, background: stroke }} />
        <span className="absolute bottom-0 right-0 block" style={{ width: 2, height: 18, background: stroke }} />
      </span>
    </div>
  );
};

// A small registration '+' mark (one can be accent green).
export const RegMark = ({ className = "", accent = false, size = 18 }) => (
  <span
    aria-hidden="true"
    className={`relative inline-block ${className}`}
    style={{ width: size, height: size }}
  >
    <span
      className="absolute left-1/2 top-0 -translate-x-1/2"
      style={{ width: 1.5, height: size, background: accent ? "var(--spot-500)" : "var(--ink-900)" }}
    />
    <span
      className="absolute top-1/2 left-0 -translate-y-1/2"
      style={{ height: 1.5, width: size, background: accent ? "var(--spot-500)" : "var(--ink-900)" }}
    />
    <span
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{ width: size * 0.5, height: size * 0.5, border: `1.5px solid ${accent ? "var(--spot-500)" : "var(--ink-900)"}` }}
    />
  </span>
);
