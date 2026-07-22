import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Muuse Ahmed",
    role: "Verified Buyer — iPhone 15 Pro",
    text: "Fast shipping and the packaging was premium. My new phone arrived in perfect condition. Will definitely shop here again!",
    initials: "SM",
  },
  {
    name: "Yuusuf Ali",
    role: "Verified Buyer — Gaming Laptop",
    text: "Best prices I found anywhere online. Customer support helped me pick the right laptop for my needs. Highly recommend Adeegsan.",
    initials: "JC",
  },
  {
    name: "Layla Ahmed",
    role: "Verified Buyer — Smart Watch",
    text: "The smartwatch tracks everything perfectly and the battery lasts for days. Great value and beautiful unboxing experience.",
    initials: "LA",
  },
  {
    name: "Ali Daahirr",
    role: "Verified Buyer — Wireless Earbuds",
    text: "Sound quality is incredible for the price. Ordered on Monday, had them by Wednesday. This is my new go-to electronics store.",
    initials: "TB",
  },
];

export default function Testimonials() {
  return (
    <section id="about" className="relative bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-[#ee1c3e]">
            Testimonials
          </span>
          <h2 className="mt-3 font-display text-4xl text-zinc-900 sm:text-5xl">
            What Our Customers Say
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="flex flex-col rounded-3xl border border-zinc-100 bg-zinc-50 p-7"
            >
              <Quote className="h-7 w-7 text-[#ee1c3e]/40" />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-600">
                {t.text}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ee1c3e] text-xs font-bold text-white">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-900">{t.name}</p>
                  <p className="text-xs text-zinc-400">{t.role}</p>
                </div>
              </div>
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
