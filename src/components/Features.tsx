import { motion } from "framer-motion";
import {
  Zap,
  BarChart3,
  ShieldCheck,
  Workflow,
  Layers,
  Globe2,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Automation",
    desc: "Trigger multi-step workflows in milliseconds with our real-time automation engine.",
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: BarChart3,
    title: "Deep Analytics",
    desc: "Beautiful dashboards that surface the insights that actually move the needle.",
    color: "from-violet-400 to-indigo-500",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    desc: "SOC 2 Type II, SSO, and end-to-end encryption baked in from day one.",
    color: "from-emerald-400 to-teal-500",
  },
  {
    icon: Workflow,
    title: "Visual Builder",
    desc: "Drag-and-drop canvas to design complex pipelines without writing code.",
    color: "from-sky-400 to-blue-500",
  },
  {
    icon: Layers,
    title: "300+ Integrations",
    desc: "Connect your entire stack — Slack, Notion, Stripe, Salesforce, and more.",
    color: "from-pink-400 to-rose-500",
  },
  {
    icon: Globe2,
    title: "Global Infrastructure",
    desc: "Deployed across 30+ regions for sub-50ms latency wherever you are.",
    color: "from-fuchsia-400 to-purple-500",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Features() {
  return (
    <section id="features" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-violet-400">
            Features
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Everything you need,
            <br /> beautifully connected
          </h2>
          <p className="mt-4 text-slate-400">
            NovaFlow brings together automation, analytics, and collaboration
            into a single elegant workspace built for speed.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl glass p-7 transition-shadow duration-300 hover:shadow-2xl hover:shadow-violet-900/30"
            >
              <div
                className={`absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br ${f.color} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30`}
              />
              <div
                className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${f.color} shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
              >
                <f.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
