const messages = [
  "🚚 Free shipping on orders over $50",
  "🔥 Mega Sale — up to 30% off electronics",
  "⭐ Rated 4.9/5 by 12,000+ happy customers",
  "🎧 New arrivals dropping every week",
];

export default function TopBar() {
  const loop = [...messages, ...messages];
  return (
    <div className="relative z-50 overflow-hidden bg-zinc-900 py-2 text-white">
      <div className="flex w-max animate-marquee gap-16 whitespace-nowrap text-xs font-medium tracking-wide">
        {loop.map((m, i) => (
          <span key={i} className="flex items-center gap-2">
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}
