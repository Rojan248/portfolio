import { Reveal } from "@/components/print/Reveal";
import { SectionHeader } from "@/components/print/SectionHeader";
import { SKILLS } from "@/data/content";

export const Skills = () => {
  return (
    <section id="skills" data-section className="border-b-2 border-ink-900 bg-paper-100">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <SectionHeader num="04" kicker="Capability Index" title="Skills" />

        <div
          className="border-t-2 border-ink-900"
          data-testid="skills-index-section"
        >
          {SKILLS.map((group) => (
            <Reveal key={group.label}>
              <div className="grid grid-cols-1 gap-3 border-b-2 border-ink-900 py-7 sm:grid-cols-12 sm:items-baseline">
                <div className="sm:col-span-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-500">
                    {group.label}
                  </span>
                </div>
                <div className="sm:col-span-9">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-3">
                    {group.items.map((item) => {
                      const hot = item === group.highlight;
                      return (
                        <span
                          key={item}
                          className="display-tight text-2xl leading-none sm:text-3xl"
                          style={{ color: hot ? "var(--spot-600)" : "var(--ink-900)" }}
                        >
                          {item}
                          <span className="mx-2 align-middle font-mono text-base text-ink-500">/</span>
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
