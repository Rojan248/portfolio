export const Barcode = ({ className = "", label }) => (
  <div className={className} aria-hidden="true">
    <div className="barcode" />
    {label ? (
      <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.3em] text-ink-500">
        {label}
      </div>
    ) : null}
  </div>
);
