import { Reveal } from "@/components/print/Reveal";
import { SectionHeader } from "@/components/print/SectionHeader";
import { Stamp } from "@/components/print/Stamp";
import { RegMark } from "@/components/print/CropMarks";
import { PROFILE } from "@/data/content";

export const About = () => {
  return (
    <section id="about" data-section className="border-b-2 border-ink-900">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <SectionHeader
          num="01"
          kicker="Colophon"
          title="About"
          right={<RegMark accent />}
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* lead copy */}
          <Reveal className="lg:col-span-7">
            <p className="display-tight text-3xl leading-[1.04] text-ink-900 sm:text-4xl">
              I build high-impact visuals where{" "}
              <span className="relative inline-block">
                <span className="absolute -inset-x-1 bottom-1 -z-0 block h-[42%] bg-spot-500" aria-hidden="true" />
                <span className="relative z-10">typography</span>
              </span>{" "}
              meets code.
            </p>
            <p className="mt-6 max-w-prose text-[15px] leading-relaxed text-ink-800">
              {PROFILE.about}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t-2 border-ink-900 pt-5">
              {["Typography", "Layout", "Brand Identity", "Design + Code"].map((t) => (
                <span key={t} className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-700">
                  <span className="mr-2 text-spot-600">+</span>
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          {/* availability ticket */}
          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="ticket relative border-2 border-ink-900 bg-paper-100">
              <div className="flex items-center justify-between border-b-2 border-dashed border-ink-900 px-5 py-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-ink-900">
                  Admit One
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-spot-600">
                  No. 001
                </span>
              </div>
              <div className="px-5 py-6">
                <div className="mb-3">
                  <Stamp accent rotate={-6}>Available</Stamp>
                </div>
                <h3 className="display-tight text-3xl leading-[0.95] text-ink-900">
                  {PROFILE.availability.headline}
                </h3>
                <ul className="mt-4 space-y-2">
                  {PROFILE.availability.lines.map((l) => (
                    <li key={l} className="flex gap-2 text-sm leading-relaxed text-ink-800">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-spot-500" aria-hidden="true" />
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-between border-t-2 border-dashed border-ink-900 px-5 py-3">
                <div className="barcode" style={{ height: 18, width: 110 }} aria-hidden="true" />
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink-500">
                  {PROFILE.location}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
