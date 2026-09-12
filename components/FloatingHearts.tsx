const marks = ["♡", "✦", "♡", "✧", "♡"];

export default function FloatingHearts() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {marks.map((m, i) => (
        <span
          key={i}
          className="absolute animate-floatUp text-blush/40"
          style={{
            left: `${12 + i * 20}%`,
            bottom: `${-10 - (i % 3) * 8}%`,
            fontSize: `${14 + (i % 3) * 8}px`,
            animationDelay: `${i * 0.9}s`,
          }}
        >
          {m}
        </span>
      ))}
    </div>
  );
}
