import { Reveal } from "@/components/print/Reveal";

// Editorial section masthead: index number + big display title + rule.
export const SectionHeader = ({ num, kicker, title, right }) => {
  return (
    <div className="mb-10 sm:mb-14">
      <div className="flex items-end justify-between gap-4 border-b-2 border-ink-900 pb-3">
        <Reveal className="flex items-end gap-4">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-spot-600">
            {num}
          </span>
          <div>
            {kicker ? (
              <div className="mb-1 font-mono text-[11px] uppercase tracking-[0.28em] text-ink-500">
                {kicker}
              </div>
            ) : null}
            <h2 className="display-tight text-5xl sm:text-6xl lg:text-7xl text-ink-900">
              {title}
            </h2>
          </div>
        </Reveal>
        {right ? (
          <div className="hidden shrink-0 pb-1 sm:block">{right}</div>
        ) : null}
      </div>
    </div>
  );
};
