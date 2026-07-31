import { useEffect } from "react";

/**
 * Apple-style proximity lighting for glass surfaces.
 *
 * ONE passive pointer/touch listener for the whole page, throttled to a single
 * rAF frame. Element rects are cached and only refreshed on scroll/resize
 * (also rAF-throttled), so pointer moves never trigger layout reads.
 * Writes only two custom properties per near element -> compositor-only work.
 */
export function useGlassProximity(radius = 260) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Touch devices: no hover pointer to track, and rect measuring during
    // momentum scroll is the main source of jank. Skip entirely.
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let els: HTMLElement[] = [];
    // document-relative rects so scrolling never needs a re-measure
    let rects: { top: number; left: number; width: number; height: number }[] = [];
    let px = -9999;
    let py = -9999;
    let frame = 0;
    let measureFrame = 0;

    const measure = () => {
      measureFrame = 0;
      els = Array.from(document.querySelectorAll<HTMLElement>("[data-glass]"));
      const sx = window.scrollX;
      const sy = window.scrollY;
      rects = els.map((el) => {
        const r = el.getBoundingClientRect();
        return { top: r.top + sy, left: r.left + sx, width: r.width, height: r.height };
      });
    };

    const queueMeasure = () => {
      if (measureFrame) return;
      measureFrame = requestAnimationFrame(measure);
    };

    const paint = () => {
      frame = 0;
      const sx = window.scrollX;
      const sy = window.scrollY;
      for (let i = 0; i < els.length; i++) {
        const m = rects[i];
        if (!m) continue;
        const r = {
          left: m.left - sx,
          top: m.top - sy,
          right: m.left - sx + m.width,
          bottom: m.top - sy + m.height,
          width: m.width,
          height: m.height,
        };
        // cheap reject: fully offscreen
        if (r.bottom < -200 || r.top > window.innerHeight + 200) continue;

        const dx = px < r.left ? r.left - px : px > r.right ? px - r.right : 0;
        const dy = py < r.top ? r.top - py : py > r.bottom ? py - r.bottom : 0;
        const dist = Math.hypot(dx, dy);
        const intensity = dist > radius ? 0 : 1 - dist / radius;
        const el = els[i];
        if (!el) continue;
        const next = intensity.toFixed(2);
        if (el.dataset["gi"] === next) continue;
        el.dataset["gi"] = next;
        el.style.setProperty("--gi", next);
        if (intensity > 0) {
          el.style.setProperty("--gx", `${((px - r.left) / r.width) * 100}%`);
          el.style.setProperty("--gy", `${((py - r.top) / r.height) * 100}%`);
        }
      }
    };

    const onMove = (e: PointerEvent | TouchEvent) => {
      const p = "touches" in e ? e.touches[0] : e;
      if (!p) return;
      px = p.clientX;
      py = p.clientY;
      if (!frame) frame = requestAnimationFrame(paint);
    };

    const onLeave = () => {
      px = -9999;
      py = -9999;
      if (!frame) frame = requestAnimationFrame(paint);
    };

    measure();
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave, { passive: true });
    window.addEventListener("touchend", onLeave, { passive: true });
    window.addEventListener("resize", queueMeasure, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("touchend", onLeave);
      window.removeEventListener("resize", queueMeasure);
      if (frame) cancelAnimationFrame(frame);
      if (measureFrame) cancelAnimationFrame(measureFrame);
    };
  }, [radius]);
}
