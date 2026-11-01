import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SEQUENCES = [
  [
    "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
    "b", "a",
  ],
  ["a", "b", "h", "i"],
  ["d", "i", "n", "k", "a", "l", "e"],
];

export function Konami() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    let positions = SEQUENCES.map(() => 0);
    const onKey = (e: KeyboardEvent) => {
      if (["Shift", "Control", "Alt", "Meta", "CapsLock"].includes(e.key)) {
        return;
      }
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      
      let hasUnlocked = false;
      positions = positions.map((pos, i) => {
        const seq = SEQUENCES[i];
        if (key === seq[pos]) {
          pos++;
          if (pos === seq.length) {
            hasUnlocked = true;
            return 0;
          }
          return pos;
        } else {
          return key === seq[0] ? 1 : 0;
        }
      });

      if (hasUnlocked) {
        setUnlocked(true);
        positions = SEQUENCES.map(() => 0);
        setTimeout(() => setUnlocked(false), 4500);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const pieces = Array.from({ length: 45 });

  return (
    <AnimatePresence>
      {unlocked && (
        <>
          <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
            {pieces.map((_, i) => {
              const left = (i * 37) % 100;
              const delay = (i % 10) * 0.05;
              const hue = (i * 45) % 360;
              return (
                <motion.div
                  key={i}
                  initial={{
                    y: -20,
                    x: `${left}vw`,
                    rotate: 0,
                    opacity: 1,
                  }}
                  animate={{
                    y: "105vh",
                    rotate: 360 * 2,
                    opacity: [1, 1, 0],
                  }}
                  transition={{
                    duration: 2.8 + (i % 5) * 0.3,
                    delay,
                    ease: "easeOut",
                  }}
                  className="absolute size-3 rounded-sm shadow-sm"
                  style={{
                    backgroundColor: `hsl(${hue}, 85%, 65%)`,
                    transform: `rotate(${i * 25}deg)`,
                  }}
                />
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.3, type: "spring" }}
            className="fixed top-8 left-1/2 -translate-x-1/2 z-[101] flex items-center gap-2.5 rounded-full border border-emerald-500/40 bg-neutral-900/90 px-4 py-2 font-mono text-xs font-semibold text-emerald-400 backdrop-blur-md shadow-2xl"
          >
            <span className="size-2 rounded-full bg-emerald-400 animate-ping" />
            <span>[EASTER EGG UNLOCKED]: BUILDING THE FUTURE WITH ABHI DINKALE</span>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
