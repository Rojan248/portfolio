import { Reveal } from "@/components/print/Reveal";
import { SectionHeader } from "@/components/print/SectionHeader";
import { REPOS, CONTACT } from "@/data/content";
import { ArrowUpRight, Github } from "lucide-react";

const RepoRow = ({ repo }) => (
  <Reveal>
    <a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      data-testid={`github-repo-row-${repo.name}`}
      className="group grid grid-cols-12 items-start gap-3 border-b-2 border-ink-900 py-6 transition-colors hover:bg-paper-100 sm:gap-6"
    >
      <div className="col-span-2 sm:col-span-1">
        <span className="font-mono text-sm text-spot-600">{repo.no}</span>
      </div>
      <div className="col-span-10 sm:col-span-6">
        <h3 className="flex items-center gap-2 font-mono text-base font-semibold text-ink-900 sm:text-lg">
          {repo.name}
          <ArrowUpRight
            size={18}
            className="text-ink-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-spot-600"
          />
        </h3>
        <p className="mt-2 max-w-prose text-sm leading-relaxed text-ink-700">{repo.desc}</p>
      </div>
      <div className="col-span-12 flex flex-wrap gap-2 sm:col-span-5 sm:justify-end">
        {repo.stack.map((s) => (
          <span
            key={s}
            className="h-fit border border-ink-900 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-800"
          >
            {s}
          </span>
        ))}
      </div>
    </a>
  </Reveal>
);

export const Lab = () => {
  return (
    <section id="lab" data-section className="border-b-2 border-ink-900">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <SectionHeader
          num="03"
          kicker="Self-Taught Developer"
          title="Lab // Code"
          right={
            <a
              href={CONTACT.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="lab-github-profile-link"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-700 transition-colors hover:text-spot-600"
            >
              <Github size={14} /> {CONTACT.github}
            </a>
          }
        />

        <div className="border-t-2 border-ink-900">
          {REPOS.map((r) => (
            <RepoRow key={r.name} repo={r} />
          ))}
        </div>
      </div>
    </section>
  );
};
