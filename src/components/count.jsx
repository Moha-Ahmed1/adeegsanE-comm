export default function StatsBanner() {
  return (
    <section className="w-full bg-zinc-900/50 border-y border-white/10 px-6 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center px-4 py-4 text-center">
              <div className="flex items-center gap-2 mb-1">
                <stat.icon className="h-5 w-5 text-[#ee1c3e]" />
                <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
              </div>
              <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
