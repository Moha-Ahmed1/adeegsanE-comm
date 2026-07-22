import { motion } from "framer-motion";
import { categories } from "../data/products";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Categories() {
  return (
    <section id="categories" className="relative bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-[#ee1c3e]">
            Categories
          </span>
          <h2 className="mt-3 font-display text-4xl text-zinc-900 sm:text-5xl">
            Shop by Category
          </h2>
          <p className="mt-4 text-zinc-500">
            Explore our full range of electronics — from the latest phones to
            powerful computers and everything in between.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6"
        >
          {categories.map((c) => (
            <motion.a
              href="#products"
              variants={item}
              whileHover={{ y: -8 }}
              key={c.name}
              className="group relative flex flex-col items-center overflow-hidden rounded-3xl border border-zinc-100 bg-zinc-50 p-6 text-center transition-shadow duration-300 hover:shadow-xl hover:shadow-zinc-200"
            >
              <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-[#ee1c3e]/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-sm">
                <img
                  src={c.image}
                  alt={c.name}
                  className="h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-sm font-semibold text-zinc-900">{c.name}</h3>
              <p className="mt-1 text-xs text-zinc-400">{c.count} items</p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
