export default function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`group inline-flex items-baseline gap-0.5 ${className}`}>
      <span className="font-display text-2xl tracking-tight text-zinc-900 transition-colors">
        Adeeg
      </span>
      <span className="font-display text-2xl tracking-tight text-[#ee1c3e] transition-transform duration-300 group-hover:-translate-y-0.5">
        san
      </span>
      <span className="ml-1 hidden translate-y-1 rounded-full bg-zinc-900 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-widest text-white sm:inline-block">
        Store
      </span>
    </a>
  );
}
