const snowflakes = Array.from({ length: 70 }, (_, index) => ({
  id: index,
  left: `${(index * 47) % 100}%`,
  delay: `${(index * 0.37) % 9}s`,
  duration: `${8 + ((index * 1.31) % 9)}s`,
  size: `${2 + ((index * 3) % 5)}px`,
  opacity: `${0.25 + ((index * 17) % 55) / 100}`,
}));

export function Snowfall() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[60] overflow-hidden"
      aria-hidden="true"
    >
      {snowflakes.map((snow) => (
        <span
          key={snow.id}
          className="christmas-snow absolute -top-4 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.35)]"
          style={{
            left: snow.left,
            width: snow.size,
            height: snow.size,
            opacity: snow.opacity,
            animationDelay: snow.delay,
            animationDuration: snow.duration,
          }}
        />
      ))}
    </div>
  );
}