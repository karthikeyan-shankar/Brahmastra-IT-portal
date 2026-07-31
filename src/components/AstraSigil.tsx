const cetMarkUrl = "/cet-mark.png";

const ORBITS = [
  { r: 40, duration: 16, particles: 3, tilt: 0 },
  { r: 56, duration: 24, particles: 4, tilt: 62 },
  { r: 72, duration: 32, particles: 2, tilt: 124 },
];

/** Energy core treatment: glowing center, pulsing rings, orbiting particles. */
export function AstraSigil({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none relative ${className}`} aria-hidden="true">
      {/* ambient energy bloom */}
      <div className="absolute inset-0 rounded-full bg-primary/18 blur-3xl" />
      <div className="absolute inset-[8%] rounded-full bg-plasma/12 blur-2xl" />

      {/* rotating conic energy sweep */}
      <div className="emblem-halo absolute inset-[4%] rounded-full opacity-95" />

      {/* pulsing rings */}
      {[0, 1.2, 2.4, 3.6].map((d) => (
        <div
          key={d}
          className="core-ring absolute inset-[20%] rounded-full border border-white/25"
          style={{ animationDelay: `${d}s` }}
        />
      ))}

      {/* particle orbits */}
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full overflow-visible">
        <defs>
          <radialGradient id="particleGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--plasma)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--plasma)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {ORBITS.map((orbit, i) => (
          <g key={i} transform={`rotate(${orbit.tilt} 100 100)`}>
            {/* orbit track */}
            <circle
              cx="100"
              cy="100"
              r={orbit.r}
              fill="none"
              stroke="var(--primary)"
              strokeOpacity="0.16"
              strokeWidth="0.8"
              strokeDasharray="2 8"
            />
            {/* orbiting particles */}
            {Array.from({ length: orbit.particles }).map((_, j) => (
              <circle
                key={j}
                cx="100"
                cy="100"
                r="2.6"
                fill="url(#particleGlow)"
                className="core-particle"
                style={{
                  "--orbit-r": `${orbit.r}px`,
                  "--orbit-duration": `${orbit.duration}s`,
                  animationDelay: `${(j / orbit.particles) * orbit.duration}s`,
                } as React.CSSProperties}
              />
            ))}
          </g>
        ))}
      </svg>

      {/* thin static orbit ticks */}
      <svg viewBox="0 0 200 200" className="anim-spin-slow absolute inset-0 h-full w-full">
        <circle
          cx="100"
          cy="100"
          r="92"
          fill="none"
          stroke="var(--primary)"
          strokeOpacity="0.28"
          strokeWidth="0.8"
          strokeDasharray="1 14"
        />
      </svg>

      {/* central core pedestal */}
      <div className="absolute left-1/2 top-1/2 h-[44%] w-[44%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.07] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.45),inset_0_-16px_28px_-20px_rgba(0,0,0,0.9),0_20px_48px_-22px_rgba(0,0,0,0.85),0_0_60px_-8px_color-mix(in_oklab,var(--primary)_55%,transparent)] backdrop-blur-[8px]" />

      {/* bright core ring */}
      <div className="absolute left-1/2 top-1/2 h-[40%] w-[40%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30 shadow-[0_0_40px_-6px_color-mix(in_oklab,var(--primary)_70%,transparent)]" />

      {/* themed glow behind the mark */}
      <div className="absolute left-1/2 top-1/2 h-[30%] w-[30%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/40 blur-[42px]" />

      {/* college mark — glowing center */}
      <div className="absolute left-1/2 top-1/2 h-[30%] w-[30%] -translate-x-1/2 -translate-y-1/2">
        <img
          src={cetMarkUrl}
          alt=""
          loading="eager"
          decoding="async"
          className="emblem-solid h-full w-full object-contain"
        />
      </div>
    </div>
  );
}
