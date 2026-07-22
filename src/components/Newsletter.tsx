import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="relative px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#ee1c3e] to-[#b3112b] px-8 py-16 text-center"
      >
        <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 animate-blob rounded-full bg-white/10 blur-3xl" />
        <div className="animation-delay-2000 pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 animate-blob rounded-full bg-white/10 blur-3xl" />

        <div className="relative">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
            <Mail className="h-7 w-7 text-white" />
          </div>
          <h2 className="font-display text-3xl text-white sm:text-4xl">
            GET 10% OFF YOUR FIRST ORDER
          </h2>
          <p className="mx-auto mt-3 max-w-md text-white/80">
            Subscribe to our newsletter for exclusive deals, new arrivals, and
            insider-only discounts.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="flex-1 rounded-full border-0 bg-white/95 px-6 py-3.5 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="group flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-6 py-3.5 text-sm font-semibold text-white transition-transform duration-300 hover:scale-105"
            >
              Subscribe
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
