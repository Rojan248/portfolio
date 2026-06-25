import { Reveal } from "@/components/print/Reveal";
import { SectionHeader } from "@/components/print/SectionHeader";
import { RegMark } from "@/components/print/CropMarks";
import { EDUCATION } from "@/data/content";

export const Education = () => {
  return (
    <section id="education" data-section className="border-b-2 border-ink-900">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <SectionHeader num="05" kicker="Academic Record" title="Education" right={<RegMark />} />

        <Reveal>
          <div className="grid grid-cols-1 gap-8 border-t-2 border-ink-900 pt-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h3 className="display-tight text-6xl leading-[0.86] text-ink-900 sm:text-7xl">
                {EDUCATION.program}
              </h3>
              <p className="mt-3 text-lg text-ink-800">{EDUCATION.school}</p>
              <div className="mt-4 inline-flex items-center gap-2 border-2 border-ink-900 px-3 py-1.5">
                <span className="h-2 w-2 bg-spot-500" aria-hidden="true" />
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-900">
                  {EDUCATION.timeline}
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.24em] text-ink-500">
                Subjects
              </div>
              <ul className="divide-y-2 divide-ink-900 border-y-2 border-ink-900">
                {EDUCATION.subjects.map((s, i) => (
                  <li key={s} className="flex items-center justify-between py-3">
                    <span className="text-base text-ink-900">{s}</span>
                    <span className="font-mono text-xs text-spot-600">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
