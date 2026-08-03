import { createFileRoute } from "@tanstack/react-router";
import { AstraSigil } from "@/components/AstraSigil";
import { EventCard } from "@/components/EventCard";


import { EVENTS } from "@/data/events";
import { useGlassProximity } from "@/hooks/useGlassProximity";
import { TargetCursor } from "@/components/TargetCursor";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brahmastra 2026 · IT Department Events | CCET" },
      {
        name: "description",
        content:
          "Department of Information Technology events at Brahmastra 2026 — Hackathon, PPT Presentation, Prompt Engineering and Brand Builder. Register online.",
      },
      { property: "og:title", content: "Brahmastra 2026 · IT Department Events" },
      {
        property: "og:description",
        content:
          "Four IT department events at Brahmastra 2026 — Hackathon, PPT Presentation, Prompt Engineering, Brand Builder. Register per event.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),

  component: Index,
});

const STATS = [
  ["04", "IT Events"],
  ["Win", "Cash Prizes"],
  ["1", "Day"],
];

function Index() {
  useGlassProximity();

  return (
    <main className="relative min-h-screen overflow-x-hidden">

      <div className="aurora-drift pointer-events-none absolute inset-0 -z-30" />
      <div className="starfield pointer-events-none absolute inset-0 -z-20" />
      <div className="grid-circuit pointer-events-none absolute inset-0 -z-10" />
      <TargetCursor cursorColor="#ffffff" cursorColorOnTarget="#ffffff" />


      {/* Hero */}
      <section className="relative flex flex-col items-center px-5 pb-14 pt-16 text-center">
        <AstraSigil className="absolute -top-4 h-[22rem] w-[22rem] opacity-70 sm:h-[26rem] sm:w-[26rem]" />

        <div className="relative anim-rise inline-block">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">
            Chettinad College of Engineering &amp; Technology
          </p>
          <h1 className="text-astra font-display cursor-target mt-6 text-4xl uppercase leading-[1.2] tracking-[0.05em] sm:text-6xl drop-shadow-xl pb-4 pt-4 px-6 inline-block rounded-xl transition-all duration-300">
            Department of<br />
            <span className="text-plasma">Information Technology</span>
          </h1>
          <div className="rune-rule mx-auto mt-4 w-40" />
          <p className="mx-auto mt-4 max-w-md text-base text-white/80">
            Four events — two technical, one non-technical, and one flagship hackathon. Register per event.
          </p>
        </div>



        <div
          className="anim-rise relative mt-8 grid w-full max-w-sm grid-cols-3 gap-2"
          style={{ animationDelay: "120ms" }}
        >
          {STATS.map(([v, l]) => (
            <div key={l} data-glass className="panel glass-live px-2 py-3">
              <span aria-hidden className="glass-live-sheen" />
              <p className="text-astra text-3xl">{v}</p>
              <p className="mt-0.5 text-[10px] uppercase tracking-widest text-white/70">
                {l}
              </p>
            </div>
          ))}
        </div>

        <div
          className="anim-rise relative mt-7 flex w-full max-w-sm flex-col gap-3"
          style={{ animationDelay: "200ms" }}
        >
          <a
            href="#events"
            className="glass-soft glow-plasma flex h-12 items-center justify-center rounded-2xl text-sm font-bold uppercase tracking-[0.2em] text-white"
          >
            View Events
          </a>
        </div>


      </section>

      {/* Events */}
      <section id="events" className="px-4 pb-20 sm:px-6">
        <header className="mx-auto mb-12 max-w-5xl text-center">
          <h2 className="text-astra text-4xl uppercase sm:text-5xl">IT Department Events</h2>
          <div className="rune-rule mx-auto mt-5 w-28" />
          <p className="mt-5 text-base text-white/80">
            Tap any event to read its rules, then register for it.
          </p>
        </header>

        <div className="mx-auto grid max-w-6xl gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {EVENTS.map((e, i) => (
            <EventCard key={e.id} event={e} index={i} />
          ))}
        </div>

      </section>

      <footer className="border-t border-border px-5 py-8 text-center">
        <p className="font-display text-lg font-bold uppercase tracking-[0.3em] text-white">TECHGEN 2K26</p>
        <p className="mt-2 text-xs text-white/70">
          Department of Information Technology
        </p>
        <p className="mt-1 text-xs text-white/50">
          Chettinad College of Engineering &amp; Technology
        </p>
      </footer>

    </main>
  );
}
