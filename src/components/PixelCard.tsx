import { useEffect, useRef, type ReactNode } from "react";
import "./PixelCard.css";

class Pixel {
  width: number;
  height: number;
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  color: string;
  speed: number;
  size = 0;
  sizeStep = Math.random() * 0.4;
  minSize = 0.5;
  maxSizeInteger = 2;
  maxSize: number;
  delay: number;
  counter = 0;
  counterStep: number;
  isIdle = false;
  isReverse = false;
  isShimmer = false;

  constructor(
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    x: number,
    y: number,
    color: string,
    speed: number,
    delay: number,
  ) {
    this.width = canvas.width;
    this.height = canvas.height;
    this.ctx = context;
    this.x = x;
    this.y = y;
    this.color = color;
    this.speed = this.getRandomValue(0.1, 0.9) * speed;
    this.maxSize = this.getRandomValue(this.minSize, this.maxSizeInteger);
    this.delay = delay;
    this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01;
  }

  getRandomValue(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  draw() {
    const centerOffset = this.maxSizeInteger * 0.5 - this.size * 0.5;
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x + centerOffset, this.y + centerOffset, this.size, this.size);
  }

  appear() {
    this.isIdle = false;
    if (this.counter <= this.delay) {
      this.counter += this.counterStep;
      return;
    }
    if (this.size >= this.maxSize) this.isShimmer = true;
    if (this.isShimmer) this.shimmer();
    else this.size += this.sizeStep;
    this.draw();
  }

  disappear() {
    this.isShimmer = false;
    this.counter = 0;
    if (this.size <= 0) {
      this.isIdle = true;
      return;
    }
    this.size -= 0.1;
    this.draw();
  }

  shimmer() {
    if (this.size >= this.maxSize) this.isReverse = true;
    else if (this.size <= this.minSize) this.isReverse = false;
    this.size += this.isReverse ? -this.speed : this.speed;
  }
}

function getEffectiveSpeed(value: number, reducedMotion: boolean) {
  const throttle = 0.001;
  if (value <= 0 || reducedMotion) return 0;
  if (value >= 100) return 100 * throttle;
  return value * throttle;
}

const VARIANTS = {
  default: { gap: 6, speed: 35, colors: "#ffffff,#f5d6d6,#d62839", noFocus: false },
 crimson: { gap: 6, speed: 40, colors: "#d62839,#ff6b6b,#ffe3e3", noFocus: false },
 crew: { gap: 6, speed: 40, colors: "#7cc4ff,#a5f3ff,#c7b3ff,#ffffff", noFocus: false },
 aurora: { gap: 6, speed: 38, colors: "#d62839,#ff6b6b,#ffe3e3,#ffffff", noFocus: false },
  ash: { gap: 8, speed: 25, colors: "#ffffff,#c9c9d1,#7a7a85", noFocus: false },
  custom: { gap: 6, speed: 40, colors: "", noFocus: false },
} as const;

type PixelCardProps = {
  variant?: keyof typeof VARIANTS;
  gap?: number;
  speed?: number;
  colors?: string;
  noFocus?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: ReactNode;
};

export function PixelCard({
  variant = "default",
  gap,
  speed,
  colors,
  noFocus,
  className = "",
  style,
  children,
}: PixelCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pixelsRef = useRef<Pixel[]>([]);
  const animationRef = useRef<number>(0);
  const timePreviousRef = useRef(0);

  // Coarse pointers: fewer, larger pixels -> a fraction of the per-frame fill
  const coarsePointer = useRef(
    typeof window !== "undefined" && window.matchMedia("(hover: none)").matches,
  ).current;

  const cfg = VARIANTS[variant] ?? VARIANTS.default;
  const finalGap = (gap ?? cfg.gap) * (coarsePointer ? 2 : 1);
  const finalSpeed = speed ?? cfg.speed;
  const finalColors = colors ?? cfg.colors;
  const finalNoFocus = noFocus ?? cfg.noFocus;


  const reducedMotion = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  ).current;

  useEffect(() => {
    timePreviousRef.current = performance.now();
    const initPixels = () => {
      const container = containerRef.current;
      const canvas = canvasRef.current;
      if (!container || !canvas) return;
      const rect = container.getBoundingClientRect();
      const width = Math.floor(rect.width);
      const height = Math.floor(rect.height);
      const ctx = canvas.getContext("2d");
      if (!ctx || width === 0 || height === 0) return;
      canvas.width = width;
      canvas.height = height;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      const colorsArray = finalColors.split(",");
      const pxs: Pixel[] = [];
      for (let x = 0; x < width; x += finalGap) {
        for (let y = 0; y < height; y += finalGap) {
          const color = colorsArray[Math.floor(Math.random() * colorsArray.length)]!;
          const dx = x - width / 2;
          const dy = y - height / 2;
          const delay = reducedMotion ? 0 : Math.sqrt(dx * dx + dy * dy);
          pxs.push(
            new Pixel(canvas, ctx, x, y, color, getEffectiveSpeed(finalSpeed, reducedMotion), delay),
          );
        }
      }
      pixelsRef.current = pxs;
    };

    initPixels();
    let resizeFrame = 0;
    const scheduleInit = () => {
      if (resizeFrame) return;
      resizeFrame = requestAnimationFrame(() => {
        resizeFrame = 0;
        initPixels();
      });
    };
    const observer = new ResizeObserver(scheduleInit);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      observer.disconnect();
      if (resizeFrame) cancelAnimationFrame(resizeFrame);
      cancelAnimationFrame(animationRef.current);
    };
  }, [finalGap, finalSpeed, finalColors, reducedMotion]);

  const doAnimate = (fnName: "appear" | "disappear") => {
    animationRef.current = requestAnimationFrame(() => doAnimate(fnName));
    const timeNow = performance.now();
    const timePassed = timeNow - timePreviousRef.current;
    const timeInterval = 1000 / 60;
    if (timePassed < timeInterval) return;
    timePreviousRef.current = timeNow - (timePassed % timeInterval);

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx || !canvas) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let allIdle = true;
    for (const pixel of pixelsRef.current) {
      pixel[fnName]();
      if (!pixel.isIdle) allIdle = false;
    }
    if (allIdle) cancelAnimationFrame(animationRef.current);
  };

  const handleAnimation = (name: "appear" | "disappear") => {
    cancelAnimationFrame(animationRef.current);
    animationRef.current = requestAnimationFrame(() => doAnimate(name));
  };

  return (
    <div
      ref={containerRef}
      className={`pixel-card ${className}`}
      style={style}
      data-glass
      onMouseEnter={() => handleAnimation("appear")}
      onMouseLeave={() => handleAnimation("disappear")}
      onPointerDown={() => handleAnimation("appear")}
      onPointerUp={() => handleAnimation("disappear")}
      onPointerCancel={() => handleAnimation("disappear")}
      onPointerLeave={() => handleAnimation("disappear")}
      onFocus={
        finalNoFocus
          ? undefined
          : (e) => {
              if (e.currentTarget.contains(e.relatedTarget as Node)) return;
              handleAnimation("appear");
            }
      }
      onBlur={
        finalNoFocus
          ? undefined
          : (e) => {
              if (e.currentTarget.contains(e.relatedTarget as Node)) return;
              handleAnimation("disappear");
            }
      }
      tabIndex={finalNoFocus ? -1 : 0}
    >
      <canvas className="pixel-canvas" ref={canvasRef} />
      {children}
    </div>
  );
}

export default PixelCard;
