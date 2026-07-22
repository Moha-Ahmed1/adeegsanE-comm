import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How long does shipping take?",
    a: "Standard shipping takes 3-5 business days. Express shipping (1-2 days) is available at checkout for an additional fee.",
  },
  {
    q: "What is your return policy?",
    a: "We offer a 30-day hassle-free return policy on all electronics. Items must be in original condition with packaging.",
  },
  {
    q: "Do you offer warranty on products?",
    a: "Yes, all products come with a minimum 1-year manufacturer warranty. Select items include an extended 2-year warranty.",
  },
  {
    q: "Can I track my order?",
    a: "Absolutely! Once your order ships, you'll receive a tracking number via email to monitor your delivery in real time.",
  },
  {
    q: "Do you ship internationally?",
    a: "Yes, we ship to over 30 countries worldwide. Shipping costs and delivery times vary by destination.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-zinc-50 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-[#ee1c3e]">
            FAQ
          </span>
          <h2 className="mt-3 font-display text-4xl text-zinc-900 sm:text-5xl">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="mt-14 space-y-4">
          {faqs.map((f, i) => (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="overflow-hidden rounded-2xl border border-zinc-100 bg-white"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-medium text-zinc-900">{f.q}</span>
                <motion.span
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100"
                >
                  <ChevronDown className="h-4 w-4 text-zinc-500" />
                </motion.span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm leading-relaxed text-zinc-500">
                      {f.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
