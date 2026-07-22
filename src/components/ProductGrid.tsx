import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products, type Category } from "../data/products";
import ProductCard from "./ProductCard";

const tabs: (Category | "All")[] = [
  "All",
  "Phones",
  "Computers",
  "Smart Watches",
  "Audio",
  "Gaming",
  "Cameras",
];

export default function ProductGrid() {
  const [active, setActive] = useState<(Category | "All")>("All");

  const filtered = useMemo(
    () => (active === "All" ? products : products.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="products" className="relative bg-zinc-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-[#ee1c3e]">
            Full Catalog
          </span>
          <h2 className="mt-3 font-display text-4xl text-zinc-900 sm:text-5xl">
            All Products
          </h2>
          <p className="mt-4 text-zinc-500">
            Browse every device in our store — phones, computers, smart
            watches, audio, gaming, and cameras.
          </p>
        </motion.div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300 ${
                active === tab
                  ? "text-white"
                  : "bg-white text-zinc-600 hover:text-[#ee1c3e]"
              }`}
            >
              {active === tab && (
                <motion.span
                  layoutId="tab-pill"
                  className="absolute inset-0 rounded-full bg-zinc-900"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
