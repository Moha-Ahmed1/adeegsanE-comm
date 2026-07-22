import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";
import { products } from "../data/products";

function getTimeLeft(target: number) {
  const diff = Math.max(target - Date.now(), 0);
  return {
    hours: Math.floor(diff / (1000 * 60 * 60)),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function FlashSale() {
  const [target] = useState(() => Date.now() + 1000 * 60 * 60 * 8 + 1000 * 60 * 24);
  const [time, setTime] = useState(getTimeLeft(target));
  const deal = products.find((p) => p.name === "MacBook Pro 16”")!;

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const units = [
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <section id="deals" className="relative overflow-hidden bg-zinc-950 px-6 py-24">
      <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 animate-blob rounded-full bg-[#ee1c3e]/25 blur-[100px]" />
      <div className="animation-delay-2000 pointer-events-none absolute bottom-0 right-0 h-80 w-80 animate-blob rounded-full bg-[#ee1c3e]/20 blur-[100px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-[#ee1c3e]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#ee1c3e]">
            <Zap className="h-3.5 w-3.5" />
            Flash Sale
          </span>
          <h2 className="mt-5 font-display text-4xl leading-tight text-white sm:text-5xl">
            MEGA PROMO
            <br />
            ON <span className="text-[#ee1c3e]">{deal.name.toUpperCase()}</span>
          </h2>
          <p className="mt-4 max-w-md text-zinc-400">
            Grab this deal before it's gone. Premium performance, stunning
            display, and all-day battery — now at our lowest price ever.
          </p>

          <div className="mt-8 flex gap-4">
            {units.map((u) => (
              <div
                key={u.label}
                className="flex w-20 flex-col items-center rounded-2xl border border-white/10 bg-white/5 py-4 backdrop-blur"
              >
                <span className="font-display text-3xl text-white">
                  {String(u.value).padStart(2, "0")}
                </span>
                <span className="mt-1 text-[10px] uppercase tracking-widest text-zinc-400">
                  {u.label}
                </span>
              </div>
            ))}
          </div>

          <a
            href="#products"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#ee1c3e] px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-[#ee1c3e]/30 transition-transform duration-300 hover:scale-105"
          >
            Grab the Deal
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute h-72 w-72 rounded-full bg-[#ee1c3e]/20 blur-3xl" />
          <div className="relative rounded-[2.5rem] border border-white/10 bg-white/5 p-10 backdrop-blur">
            <span className="absolute -left-4 -top-4 flex h-16 w-16 rotate-[-8deg] items-center justify-center rounded-2xl bg-[#ee1c3e] font-display text-sm text-white shadow-xl">
              -27%
            </span>
            <img
              src={deal.image}
              alt={deal.name}
              className="animate-float w-72 drop-shadow-2xl"
            />
            <div className="mt-4 text-center">
              <p className="text-2xl font-bold text-white">
                ${deal.price}{" "}
                <span className="text-base font-normal text-zinc-500 line-through">
                  ${deal.oldPrice ?? deal.price + 300}
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
