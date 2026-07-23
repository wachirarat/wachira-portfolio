import { useMemo } from 'react';

interface Ember {
  left: string;
  size: number;
  delay: string;
  duration: string;
  drift: string;
  glow: boolean;
}

export default function Embers({ count = 35 }: { count?: number }) {
  const embers = useMemo<Ember[]>(
    () =>
      Array.from({ length: count }, () => ({
        left: `${Math.random() * 100}%`,
        size: Math.random() * 3 + 1.5,
        delay: `${Math.random() * 18}s`,
        duration: `${Math.random() * 12 + 14}s`,
        drift: `${(Math.random() - 0.5) * 120}px`,
        glow: Math.random() > 0.6,
      })),
    [count]
  );

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Mist layers */}
      <div className="mist absolute -bottom-20 left-0 h-64 w-[140%] bg-gradient-to-t from-zinc-950/70 to-transparent blur-2xl" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-emerald-950/10 to-transparent" />

      {/* Rising embers */}
      {embers.map((ember, i) => (
        <span
          key={i}
          className={`ember absolute rounded-full ${
            ember.glow
              ? 'bg-emerald-400 shadow-[0_0_6px_2px_rgba(52,211,153,0.35)]'
              : 'bg-emerald-600/70'
          }`}
          style={{
            left: ember.left,
            bottom: '-10px',
            width: ember.size,
            height: ember.size,
            animationDelay: ember.delay,
            animationDuration: ember.duration,
            ['--drift' as string]: ember.drift,
          }}
        />
      ))}
    </div>
  );
}
