// CSS-rendered automotive 'spec poster' plate for works without an image.
export const SpecPlate = ({ data, variant = "thumb" }) => {
  const p = data.plate;
  const full = variant === "full";
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-paper-100 text-ink-900">
      {/* top metadata bar */}
      <div className="flex items-center justify-between border-b-2 border-ink-900 px-4 py-2">
        <span className={`font-mono uppercase tracking-[0.24em] ${full ? "text-xs" : "text-[9px]"}`}>
          {p.code}
        </span>
        <span className={`font-mono uppercase tracking-[0.24em] text-spot-600 ${full ? "text-xs" : "text-[9px]"}`}>
          {data.year}
        </span>
      </div>

      {/* marque + halftone */}
      <div className="relative flex-1 px-4 pt-4">
        <div className="halftone-light pointer-events-none absolute inset-x-0 top-0 h-1/2 opacity-60" aria-hidden="true" />
        <div className="relative">
          <div className={`font-mono uppercase tracking-[0.3em] text-ink-500 ${full ? "text-xs" : "text-[9px]"}`}>
            Spec Poster
          </div>
          <h3
            className="display-tight leading-[0.82] text-ink-900"
            style={{ fontSize: full ? "clamp(2.5rem,7vw,5.5rem)" : "clamp(1.6rem,9cqw,3rem)" }}
          >
            {p.marque}
          </h3>
          <div className="relative mt-1 inline-block">
            <span
              className="absolute -inset-x-1 bottom-1 -z-0 block bg-spot-500"
              style={{ height: full ? "38%" : "40%" }}
              aria-hidden="true"
            />
            <span
              className="display-tight relative z-10 text-ink-900"
              style={{ fontSize: full ? "clamp(2rem,5vw,4rem)" : "clamp(1.3rem,7cqw,2.4rem)" }}
            >
              {p.model}
            </span>
          </div>
          <div className={`mt-2 font-mono uppercase tracking-[0.26em] text-ink-700 ${full ? "text-sm" : "text-[10px]"}`}>
            {p.edition}
          </div>
        </div>
      </div>

      {/* spec rows */}
      <div className="mt-2 border-t-2 border-ink-900 px-4 py-3">
        {p.specs.map((s, i) => (
          <div
            key={s.k}
            className={`flex items-center justify-between ${i === 0 ? "" : "border-t border-[color:var(--rule)]"} py-1`}
          >
            <span className={`font-mono uppercase tracking-[0.22em] text-ink-500 ${full ? "text-xs" : "text-[9px]"}`}>
              {s.k}
            </span>
            <span className={`font-mono font-semibold uppercase tracking-[0.12em] text-ink-900 ${full ? "text-base" : "text-[11px]"}`}>
              {s.v}
            </span>
          </div>
        ))}
      </div>

      {/* footer barcode */}
      <div className="flex items-end justify-between gap-3 border-t-2 border-ink-900 px-4 py-2">
        <div className="barcode" style={{ height: full ? 26 : 16, width: full ? 120 : 70 }} aria-hidden="true" />
        <span className={`font-mono uppercase tracking-[0.24em] text-ink-500 ${full ? "text-[11px]" : "text-[8px]"}`}>
          R.KAFLE &middot; DESIGN
        </span>
      </div>
    </div>
  );
};
