import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { BrahmastraEvent } from "@/data/events";
import { PixelCard } from "@/components/PixelCard";

export function EventCard({ event, index }: { event: BrahmastraEvent; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <PixelCard
      variant="aurora"
      className="panel sweep-host anim-rise relative overflow-hidden outline-none flex flex-col h-full"
      style={{ animationDelay: `${Math.min(index, 6) * 70}ms` } as React.CSSProperties}
    >
      <div className="relative h-1 shrink-0 overflow-hidden bg-white/5">
        <div className="anim-scan h-full w-1/3 bg-gradient-to-r from-transparent via-accent to-transparent" />
      </div>

      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 shrink-0">
          <div className="min-w-0">
            <h3 className="truncate text-2xl tracking-wide text-white">{event.name}</h3>
            <p className="text-ui mt-0.5 text-[15px] leading-snug text-white/70">{event.tagline}</p>
          </div>
          <span className="text-ui shrink-0 glass-soft rounded-full px-2.5 py-1 text-[11px] font-semibold text-white/90">
            {event.type}
          </span>
        </div>

        <dl className="mt-4 grid grid-cols-3 gap-2 text-center shrink-0">
          {[
            ["Team", event.team],
            ["Time", event.duration],
            ["Prize", event.prize],
          ].map(([k, v]) => (
            <div key={k} className="glass-soft flex h-full flex-col items-center justify-center rounded-2xl px-2 py-2">
              <dt className="text-ui text-[11px] font-medium text-white/60">{k}</dt>
              <dd className="text-ui mt-0.5 text-sm font-semibold leading-tight text-white">{v}</dd>
            </div>
          ))}
        </dl>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="text-ui mt-3 flex w-full shrink-0 items-center justify-center gap-1 text-[15px] font-medium text-accent transition-colors hover:text-primary"
        >
          {open ? "Hide rules" : "Rules"}
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </button>

        <div
          className={`grid shrink-0 transition-[grid-template-rows] duration-300 ease-out ${
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <ul className="text-ui overflow-hidden text-[15px] leading-relaxed text-white/75">
            {event.details.map((d) => (
              <li key={d} className="mt-2 flex gap-2 first:mt-3">
                <svg
                  viewBox="0 0 12 12"
                  aria-hidden
                  className="mt-1.5 h-2.5 w-2.5 shrink-0 text-accent"
                >
                  <path
                    d="M6 0.5 7.3 4.7 11.5 6 7.3 7.3 6 11.5 4.7 7.3 0.5 6 4.7 4.7Z"
                    fill="currentColor"
                    opacity="0.9"
                  />
                </svg>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>

        <a
          href={event.formUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ui glass-primary mt-auto flex h-11 shrink-0 items-center justify-center rounded-2xl text-[13px] font-bold uppercase tracking-[0.18em] text-primary-foreground transition-transform active:scale-[0.98]"
        >
          Register Now
        </a>
      </div>
    </PixelCard>
  );
}
