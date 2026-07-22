import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Truck, Headphones } from "lucide-react";

const perks = [
  { icon: Truck, text: "Free Shipping" },
  { icon: ShieldCheck, text: "2-Year Warranty" },
  { icon: Headphones, text: "24/7 Support" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-zinc-950">
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 animate-blob rounded-full bg-[#ee1c3e]/30 blur-[100px]" />
      <div className="animation-delay-2000 pointer-events-none absolute -right-20 top-40 h-96 w-96 animate-blob rounded-full bg-[#ee1c3e]/20 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:56px_56px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 md:py-28 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white"
          >
            <span className="flex h-2 w-2 animate-pulse-ring rounded-full bg-[#ee1c3e]" />
            Mega Electronics Sale — Ends Soon
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl leading-[1.05] text-white sm:text-6xl xl:text-7xl"
          >
            UPGRADE
            <br />
            YOUR <span className="text-[#ee1c3e]">TECH</span>
            <br />
            TODAY
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-md text-zinc-400 lg:mx-0"
          >
            Shop the latest smartphones, laptops, smartwatches, and audio gear
            — all in one place, with unbeatable prices and lightning-fast
            delivery.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <a
              href="#products"
              className="group flex items-center gap-2 rounded-full bg-[#ee1c3e] px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-[#ee1c3e]/30 transition-transform duration-300 hover:scale-105"
            >
              Shop Now
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#categories"
              className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Browse Categories
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-6 lg:justify-start"
          >
            {perks.map((p) => (
              <div key={p.text} className="flex items-center gap-2 text-sm text-zinc-300">
                <p.icon className="h-4 w-4 text-[#ee1c3e]" />
                {p.text}
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute h-72 w-72 rounded-full bg-gradient-to-br from-[#ee1c3e]/40 to-transparent blur-3xl sm:h-96 sm:w-96" />
          <img
            src="/images/hero-banner.png"
            alt="Latest electronics devices"
            className="animate-float relative z-10 w-full max-w-xl drop-shadow-2xl"
          />
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute left-0 top-6 z-20 hidden rounded-2xl bg-white p-3 shadow-2xl sm:flex sm:items-center sm:gap-3"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-lg font-bold text-[#ee1c3e]">
              -30%
            </span>
            <div>
              <p className="text-xs text-zinc-400">Limited Deal</p>
              <p className="text-sm font-semibold text-zinc-900">On Laptops</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute bottom-6 right-0 z-20 hidden rounded-2xl bg-white p-3 shadow-2xl sm:flex sm:items-center sm:gap-3"
          >
            <span className="text-lg">⭐️</span>
            <div>
              <p className="text-sm font-semibold text-zinc-900">4.9/5 Rating</p>
              <p className="text-xs text-zinc-400">12,000+ reviews</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
