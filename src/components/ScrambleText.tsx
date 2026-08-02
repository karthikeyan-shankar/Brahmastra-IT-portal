import { useEffect, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*<>[]{}";

export function ScrambleText({ text, speed = 30, iterations = 3 }: { text: string; speed?: number; iterations?: number }) {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) =>
        prev
          .split("")
          .map((char, index) => {
            // Keep spaces intact
            if (char === " ") return " ";
            // Settle on the correct character if we've passed its iteration
            if (index < Math.floor(iteration)) {
              return text[index];
            }
            // Otherwise, show a random character
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / iterations;
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, iterations]);

  return <>{displayText}</>;
}
