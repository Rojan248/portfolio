import { PROFILE, CONTACT } from "@/data/content";
import { Barcode } from "@/components/print/Barcode";

export const ColophonFooter = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink-900 text-paper-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="display-tight text-5xl leading-[0.85] sm:text-6xl">
              {PROFILE.firstName}
              <br />
              <span className="text-spot-400">{PROFILE.lastName}</span>
            </div>
            <p className="mt-5 max-w-sm font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-paper-50/70">
              Confidential portfolio material. Unauthorized reproduction will be met with zero
              mercy. Prepare for ascension.
            </p>
          </div>

          <div className="lg:col-span-3">
            <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.24em] text-spot-400">
              Contact
            </div>
            <ul className="space-y-2 font-mono text-xs text-paper-50/85">
              <li>
                <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-spot-400">
                  {CONTACT.email}
                </a>
              </li>
              <li>{CONTACT.phone}</li>
              <li>
                <a href={CONTACT.githubUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-spot-400">
                  {CONTACT.github}
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.24em] text-spot-400">
              Colophon
            </div>
            <ul className="space-y-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-paper-50/70">
              <li>Type / Bebas Neue + IBM Plex</li>
              <li>Built / React &middot; FastAPI</li>
              <li>Set in / {PROFILE.location}</li>
              <li>Edition / {PROFILE.volume}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-paper-50/20 pt-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="w-40 opacity-80">
            <Barcode label="R-KAFLE-2026" />
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper-50/60">
            &copy; {year} {PROFILE.firstName} {PROFILE.lastName} &middot; Elevate. Adapt. Ascend.
          </p>
        </div>
      </div>
    </footer>
  );
};
