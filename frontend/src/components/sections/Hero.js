import { useMemo } from "react";
import { Reveal } from "@/components/print/Reveal";
import { Stamp } from "@/components/print/Stamp";
import { CropMarks, RegMark } from "@/components/print/CropMarks";
import { PROFILE, NAV } from "@/data/content";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const MOTTO_STRIP = [
  "DEDICATION",
  "DISCIPLINE",
  "DOMINANCE",
  "ELEVATE",
  "ADAPT",
  "ASCEND",
];
// Doubled so the marquee can loop seamlessly.
const MARQUEE = [...MOTTO_STRIP, ...MOTTO_STRIP];

const goTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const MarqueeStrip = () => (
  <div className="overflow-hidden border-t-2 border-ink-900 bg-ink-900 py-2.5">
    <div className="marquee-track">
      {MARQUEE.map((m, i) => (
        <span
          key={`${m}-${i}`}
          className="mx-5 font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-paper-50"
        >
          {m} <span className="text-spot-400">//</span>
        </span>
      ))}
    </div>
  </div>
);

const IssueContents = ({ items, onNavigate }) => (
  <div className="pointer-events-none absolute right-0 top-1 hidden w-72 lg:block">
    <Reveal delay={0.15}>
      <div className="pointer-events-auto border-2 border-ink-900 bg-paper-50/85 backdrop-blur-[1px]">
        <div className="flex items-center justify-between border-b-2 border-ink-900 px-4 py-2.5">
          <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-ink-900">
            In This Issue
          </span>
          <RegMark accent size={14} />
        </div>
        <ul>
          {items.map((n) => (
            <li key={n.id} className="border-b border-[color:var(--rule)] last:border-b-0">
              <button
                onClick={() => onNavigate(n.id)}
                data-testid={`hero-contents-link-${n.id}`}
                className="group flex w-full items-center gap-3 px-4 py-2.5 text-left transition-colors hover:bg-paper-100"
              >
                <span className="font-mono text-[11px] text-spot-600">{n.num}</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-800">
                  {n.label}
                </span>
                <span className="leader" />
                <ArrowUpRight
                  size={13}
                  className="shrink-0 text-ink-500 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-spot-600"
                />
              </button>
            </li>
          ))}
        </ul>
        <div className="border-t-2 border-ink-900 px-4 py-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-700">
            KATHMANDU &rarr; REMOTE
          </span>
        </div>
      </div>
    </Reveal>
  </div>
);

export const Hero = () => {
  const contents = useMemo(() => NAV.filter((n) => n.id !== "cover"), []);

  return (
    <section id="cover" data-section className="relative overflow-hidden border-b-2 border-ink-900">
      {/* halftone wash on the right */}
      <div
        className="halftone-light pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-50"
        aria-hidden="true"
      />
      <CropMarks />

      <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-10 sm:px-6 sm:pt-14 lg:px-10">
        {/* top meta row */}
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-y-3 border-b-2 border-ink-900 pb-3 font-mono text-[10px] uppercase tracking-[0.26em] text-ink-700 sm:text-[11px]">
            <span>{PROFILE.volume}</span>
            <span className="text-spot-600">PORTFOLIO &mdash; LIMITED EDITION</span>
            <span>{PROFILE.issue}</span>
            <span className="hidden sm:inline">{PROFILE.location}</span>
          </div>
        </Reveal>

        {/* main masthead */}
        <div className="relative grid grid-cols-12 gap-4 pt-8 sm:pt-12">
          <div className="col-span-12 lg:col-span-11">
            <Reveal>
              <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-ink-500">
                Graphic Designer &mdash; Portfolio
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="display-tight text-ink-900">
                <span className="block" style={{ fontSize: "clamp(4.5rem,21vw,17rem)" }}>
                  {PROFILE.firstName}
                </span>
                <span
                  className="relative block w-fit"
                  style={{ fontSize: "clamp(4.5rem,21vw,17rem)" }}
                >
                  <span
                    className="absolute -inset-x-2 bottom-[0.12em] -z-0 block bg-spot-500"
                    style={{ height: "0.42em" }}
                    aria-hidden="true"
                  />
                  <span className="relative z-10">{PROFILE.lastName}</span>
                </span>
              </h1>
            </Reveal>

            {/* role line */}
            <Reveal delay={0.1}>
              <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 border-t-2 border-ink-900 pt-4">
                {PROFILE.roles.map((r, i) => (
                  <span key={r} className="flex items-center gap-3">
                    {i > 0 && <span className="font-mono text-spot-600">//</span>}
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-800 sm:text-sm">
                      {r}
                    </span>
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* right rail — editorial "in this issue" contents */}
          <IssueContents items={contents} onNavigate={goTo} />
        </div>

        {/* bottom block: availability + motto + scroll cue */}
        <div className="mt-10 grid grid-cols-1 items-end gap-6 sm:mt-14 lg:grid-cols-12">
          <Reveal delay={0.15} className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-4">
              <Stamp accent rotate={-7} data-testid="hero-available-stamp">
                Open to Work
              </Stamp>
              <p className="max-w-md text-sm leading-relaxed text-ink-800">
                Part-time remote, evenings &amp; weekends (Nepal) &mdash; aligned with US / UK
                mornings. <span className="font-semibold">24&ndash;48h delivery.</span>
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="lg:col-span-5">
            <div className="flex items-center gap-3 lg:justify-end">
              <span className="font-mono text-spot-600">[</span>
              {PROFILE.motto.map((m, i) => (
                <span key={m} className="flex items-center gap-3">
                  {i > 0 && <span className="h-1 w-1 rounded-full bg-ink-500" />}
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-ink-900">
                    {m}
                  </span>
                </span>
              ))}
              <span className="font-mono text-spot-600">]</span>
            </div>
          </Reveal>
        </div>

        {/* scroll cue */}
        <Reveal delay={0.25}>
          <a
            href="#about"
            data-testid="hero-scroll-cue"
            className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.24em] text-ink-700 transition-colors hover:text-spot-600"
          >
            Scroll to read <ArrowDownRight size={15} />
          </a>
        </Reveal>
      </div>

      <MarqueeStrip />
    </section>
  );
};
