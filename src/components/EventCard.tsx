import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import type { BrahmastraEvent } from "@/data/events";
import { PixelCard } from "@/components/PixelCard";

export function EventCard({ event, index }: { event: BrahmastraEvent; index: number }) {
  return (
    <Dialog>
      <PixelCard
        variant="aurora"
        className="panel sweep-host anim-rise relative overflow-hidden outline-none flex flex-col h-full"
        style={{ animationDelay: `${Math.min(index, 6) * 70}ms` } as React.CSSProperties}
      >
        <div className="relative h-1 shrink-0 overflow-hidden bg-white/5">
          <div className="anim-scan h-full w-1/3 bg-gradient-to-r from-transparent via-accent to-transparent" />
        </div>

        <div className="p-6 sm:p-8 flex flex-col flex-1">
          <div className="flex items-start justify-between gap-4 shrink-0">
            <div className="min-w-0">
              <h3 className="truncate text-3xl tracking-wide text-white">{event.name}</h3>
              <p className="text-ui mt-1.5 text-base leading-snug text-white/70">{event.tagline}</p>
            </div>
            <span className="text-ui shrink-0 glass-soft rounded-full px-3 py-1.5 text-xs font-semibold text-white/90">
              {event.type}
            </span>
          </div>

          <dl className="mt-8 mb-8 grid grid-cols-2 gap-4 text-center shrink-0">
            {[
              ["Team", event.team],
              ["Time", event.duration],
            ].map(([label, value]) => (
              <div key={label} className="glass-soft flex h-full flex-col items-center justify-center rounded-2xl px-4 py-3">
                <dt className="text-ui text-xs font-medium text-white/60">{label}</dt>
                <dd className="text-ui mt-1 text-base font-semibold leading-tight text-white">{value}</dd>
              </div>
            ))}
          </dl>

          <DialogTrigger asChild>
            <button
              type="button"
              className="text-ui glass-soft mt-auto flex h-14 shrink-0 items-center justify-center rounded-2xl text-[14px] font-bold uppercase tracking-[0.18em] text-white transition-transform hover:bg-white/10 active:scale-[0.98]"
            >
              View Details
            </button>
          </DialogTrigger>
        </div>
      </PixelCard>

      <DialogContent className="panel sweep-continuous anim-modal-pulse bg-black/95 text-white w-[92vw] max-w-md rounded-3xl p-5 sm:p-6 backdrop-blur-xl mx-auto overflow-y-auto overflow-x-hidden max-h-[85vh]">
        <DialogHeader>
          <DialogTitle className="text-astra text-2xl sm:text-3xl uppercase tracking-widest">{event.name}</DialogTitle>
        </DialogHeader>

        <div className="mt-2">
          <h4 className="text-ui text-sm font-bold uppercase tracking-widest text-accent">Event Rules</h4>
          <ul className="text-ui mt-3 space-y-3 text-[15px] leading-relaxed text-white/80">
            {event.details.map((d) => (
              <li key={d} className="flex gap-3">
                <svg
                  viewBox="0 0 12 12"
                  aria-hidden
                  className="mt-1.5 h-3 w-3 shrink-0 text-accent drop-shadow-md"
                >
                  <path
                    d="M6 0.5 7.3 4.7 11.5 6 7.3 7.3 6 11.5 4.7 7.3 0.5 6 4.7 4.7Z"
                    fill="currentColor"
                  />
                </svg>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>

        {event.coordinators && event.coordinators.length > 0 && (
          <div className="mt-6">
            <h4 className="text-ui text-sm font-bold uppercase tracking-widest text-accent">Coordinators</h4>
            <ul className="text-ui mt-3 space-y-2 text-[15px] leading-relaxed text-white/80">
              {event.coordinators.map((c) => (
                <li key={c} className="flex gap-3 items-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 shrink-0 text-accent/80"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-6">
          <a
            href={event.formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ui glass-primary flex h-12 items-center justify-center rounded-2xl text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground shadow-[0_0_15px_rgba(200,50,50,0.4)] transition-transform hover:shadow-[0_0_25px_rgba(200,50,50,0.6)] active:scale-[0.98]"
          >
            Register Now
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
