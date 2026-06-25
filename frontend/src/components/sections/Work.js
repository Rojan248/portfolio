import { useState, useCallback, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Reveal } from "@/components/print/Reveal";
import { SectionHeader } from "@/components/print/SectionHeader";
import { Stamp } from "@/components/print/Stamp";
import { WORK } from "@/data/content";
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";

// Right-column tiles get a downward stagger for an editorial rhythm.
const layoutClass = {
  summit: "",
  "the-rocks": "lg:mt-20",
  aprilia: "",
  porsche: "lg:mt-20",
};

const Tile = ({ item, onOpen }) => (
  <Reveal className={layoutClass[item.id] || ""}>
    <button
      data-testid={`work-card-${item.id}`}
      onClick={onOpen}
      className="group block w-full text-left"
      aria-label={`Open ${item.title}`}
    >
      <div className="relative overflow-hidden border-2 border-ink-900 bg-ink-900 distress">
        {/* media */}
        <div
          className="relative w-full overflow-hidden"
          style={{ aspectRatio: item.ratio || "1024 / 1536" }}
        >
          <img
            src={item.thumb}
            alt={`${item.title} \u2014 ${item.subtitle}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          {/* hover veil + view stamp */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-ink-900/0 opacity-0 transition-all duration-300 group-hover:bg-ink-900/25 group-hover:opacity-100">
            <span className="translate-y-2 bg-paper-50/95 transition-transform duration-300 group-hover:translate-y-0">
              <Stamp accent rotate={-6}>View &middot; {item.no}</Stamp>
            </span>
          </div>
        </div>

        {/* metadata strip */}
        <div className="flex items-center justify-between border-t-2 border-ink-900 bg-paper-50 px-4 py-2.5">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-500">
            {item.category}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-spot-600">
            {item.year}
          </span>
        </div>
      </div>

      {/* caption under tile */}
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="display-tight text-3xl leading-[0.9] text-ink-900 sm:text-4xl">
            {item.title}
          </h3>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-700">
            {item.subtitle}
          </p>
        </div>
        <ArrowUpRight
          className="mt-1 shrink-0 text-ink-700 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-spot-600"
          size={22}
        />
      </div>
    </button>
  </Reveal>
);

export const Work = () => {
  const [index, setIndex] = useState(null);
  const open = index !== null;
  const item = open ? WORK[index] : null;

  const next = useCallback(() => setIndex((i) => (i + 1) % WORK.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + WORK.length) % WORK.length), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, next, prev]);

  return (
    <section id="work" data-section className="border-b-2 border-ink-900">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <SectionHeader
          num="02"
          kicker="Plates 01–04"
          title="Selected Work"
          right={
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-500">
              Click a plate to enlarge
            </span>
          }
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
          {WORK.map((w, i) => (
            <Tile key={w.id} item={w} onOpen={() => setIndex(i)} />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Dialog open={open} onOpenChange={(o) => !o && setIndex(null)}>
        <DialogContent
          data-testid="work-lightbox-dialog"
          className="max-w-5xl gap-0 overflow-hidden border-2 border-ink-900 bg-paper-50 p-0 [&>button]:hidden"
        >
          {item && (
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* media */}
              <div className="relative flex items-center justify-center border-b-2 border-ink-900 bg-ink-900 p-4 md:border-b-0 md:border-r-2">
                <img
                  src={item.full}
                  alt={`${item.title} \u2014 ${item.subtitle}`}
                  className="max-h-[44vh] w-auto object-contain md:max-h-[80vh]"
                />
              </div>

              {/* details */}
              <div className="flex flex-col">
                <div className="flex items-center justify-between border-b-2 border-ink-900 px-5 py-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.26em] text-spot-600">
                    Plate {item.no}
                  </span>
                  <button
                    onClick={() => setIndex(null)}
                    data-testid="work-lightbox-close-button"
                    aria-label="Close"
                    className="flex h-8 w-8 items-center justify-center border-2 border-ink-900 text-ink-900 transition-colors hover:bg-ink-900 hover:text-paper-50"
                  >
                    <X size={16} />
                  </button>
                </div>

                <div className="flex-1 px-5 py-6">
                  <h3 className="display-tight text-5xl leading-[0.86] text-ink-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-ink-700">
                    {item.subtitle} &middot; {item.year}
                  </p>
                  <p className="mt-5 text-sm leading-relaxed text-ink-800">{item.blurb}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="border border-ink-900 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* nav */}
                <div className="flex items-center justify-between border-t-2 border-ink-900">
                  <button
                    onClick={prev}
                    data-testid="work-lightbox-prev-button"
                    className="flex flex-1 items-center justify-center gap-2 border-r-2 border-ink-900 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-900 transition-colors hover:bg-paper-200"
                  >
                    <ChevronLeft size={15} /> Prev
                  </button>
                  <button
                    onClick={next}
                    data-testid="work-lightbox-next-button"
                    className="flex flex-1 items-center justify-center gap-2 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-900 transition-colors hover:bg-paper-200"
                  >
                    Next <ChevronRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
