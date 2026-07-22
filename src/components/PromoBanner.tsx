import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function PromoBanner() {
  return (
    <section className="relative bg-white px-6 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2">
        <motion.a
          href="#products"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -6 }}
          className="group relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-3xl bg-zinc-900 p-10"
        >
          <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-[#ee1c3e]/30 blur-3xl transition-transform duration-500 group-hover:scale-125" />
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#ee1c3e]">
              Audio Collection
            </span>
            <h3 className="mt-3 font-display text-3xl leading-tight text-white sm:text-4xl">
              WIRELESS
              <br />
              SOUND
            </h3>
          </div>
          <div className="flex items-end justify-between">
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-white">
              Shop Audio
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
            <img
              src="/images/product-earbuds.png"
              alt="Wireless earbuds"
              className="h-32 w-32 object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
            />
          </div>
        </motion.a>

        <motion.a
          href="#products"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ y: -6 }}
          className="group relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-3xl bg-[#ee1c3e] p-10"
        >
          <div className="pointer-events-none absolute -left-10 -bottom-10 h-56 w-56 rounded-full bg-white/20 blur-3xl transition-transform duration-500 group-hover:scale-125" />
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-white/80">
              Gaming Zone
            </span>
            <h3 className="mt-3 font-display text-3xl leading-tight text-white sm:text-4xl">
              LEVEL UP
              <br />
              YOUR PLAY
            </h3>
          </div>
          <div className="flex items-end justify-between">
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-white">
              Shop Gaming
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
            <img
              src="/images/product-console.png"
              alt="Gaming console"
              className="h-32 w-32 object-contain transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6"
            />
          </div>
        </motion.a>
      </div>
    </section>
  );
}
