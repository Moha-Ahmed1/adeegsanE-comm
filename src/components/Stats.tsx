import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Users, Package, Star, Globe } from "lucide-react";

const stats = [
  { icon: Users, value: 12000, suffix: "+", label: "Happy Customers" },
  { icon: Package, value: 850, suffix: "+", label: "Products Available" },
  { icon: Star, value: 4.9, suffix: "/5", label: "Average Rating" },
  { icon: Globe, value: 30, suffix: "+", label: "Countries Shipped" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => {
        setDisplay(value % 1 !== 0 ? v.toFixed(1) : Math.floor(v).toLocaleString());
      },
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative bg-zinc-900 px-6 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ee1c3e]/15">
              <s.icon className="h-6 w-6 text-[#ee1c3e]" />
            </div>
            <div className="font-display text-3xl text-white sm:text-4xl">
              <Counter value={s.value} suffix={s.suffix} />
            </div>
            <p className="mt-1 text-sm text-zinc-400">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
