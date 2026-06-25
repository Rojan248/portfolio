import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NAV, PROFILE } from "@/data/content";

const Bird = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true" className="translate-y-[1px]">
    <path
      d="M2 6 L12 13 L22 6 L20 18 L12 12 L4 18 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

export const TopNav = ({ active }) => {
  const [open, setOpen] = useState(false);

  const go = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      data-testid="top-nav"
      className="sticky top-0 z-40 border-b-2 border-ink-900 bg-paper-50/92 backdrop-blur-[3px]"
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
        {/* Masthead mark */}
        <button
          onClick={() => go("cover")}
          data-testid="nav-logo"
          className="group flex items-center gap-2 font-mono text-[12px] font-semibold uppercase tracking-[0.24em] text-ink-900"
        >
          <span className="text-spot-600 transition-transform group-hover:-translate-y-0.5">
            <Bird />
          </span>
          {PROFILE.firstName} {PROFILE.lastName}
        </button>

        {/* Inline nav (desktop) */}
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Sections">
          {NAV.filter((n) => n.id !== "cover").map((n) => {
            const isActive = active === n.id;
            return (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                data-testid={`nav-link-${n.id}`}
                className="group relative font-mono text-[11px] uppercase tracking-[0.18em] transition-colors"
                style={{ color: isActive ? "var(--ink-900)" : "var(--ink-500)" }}
              >
                <span className="inline-flex items-center gap-1.5">
                  <span
                    className="inline-block h-1.5 w-1.5 transition-all"
                    style={{
                      background: isActive ? "var(--spot-500)" : "transparent",
                      border: isActive ? "none" : "1px solid var(--rule)",
                    }}
                  />
                  {n.label}
                </span>
                <span
                  className="absolute -bottom-1 left-0 h-0.5 bg-ink-900 transition-all duration-300"
                  style={{ width: isActive ? "100%" : "0%" }}
                />
              </button>
            );
          })}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => go("contact")}
            data-testid="nav-contact-cta"
            className="hidden border-2 border-ink-900 bg-ink-900 px-3.5 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-paper-50 transition-colors hover:bg-ink-700 sm:inline-block"
          >
            Get in touch
          </button>

          {/* Index sheet (all sizes, primary on mobile) */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                data-testid="nav-index-open-button"
                aria-label="Open index"
                className="flex items-center gap-2 border-2 border-ink-900 px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-900 transition-colors hover:bg-paper-200 lg:hidden"
              >
                <Menu size={15} /> Index
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              data-testid="nav-index-sheet"
              className="w-[86vw] max-w-sm border-l-2 border-ink-900 bg-paper-50 p-0 text-ink-900"
            >
              <div className="flex items-center justify-between border-b-2 border-ink-900 px-6 py-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink-500">
                  {PROFILE.issue}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-spot-600">
                  Index
                </span>
              </div>
              <nav className="flex flex-col px-2 py-2" aria-label="Index">
                {NAV.map((n) => {
                  const isActive = active === n.id;
                  return (
                    <SheetClose asChild key={n.id}>
                      <button
                        onClick={() => go(n.id)}
                        data-testid={`nav-toc-link-${n.id}`}
                        className="group flex items-baseline justify-between border-b border-[color:var(--rule)] px-4 py-4 text-left transition-colors hover:bg-paper-100"
                      >
                        <span className="flex items-baseline gap-4">
                          <span className="font-mono text-xs text-spot-600">{n.num}</span>
                          <span className="display-tight text-3xl">{n.label}</span>
                        </span>
                        <span
                          className="h-2 w-2"
                          style={{ background: isActive ? "var(--spot-500)" : "transparent", border: isActive ? "none" : "1px solid var(--rule)" }}
                        />
                      </button>
                    </SheetClose>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
