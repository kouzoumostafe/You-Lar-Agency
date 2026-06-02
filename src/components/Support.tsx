import { motion } from "motion/react";
import { Check } from "lucide-react";
import support from "@/assets/support.webp";

export function Support() {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="overflow-hidden rounded-3xl shadow-card">
          <img src={support} alt="Support staff" width={1024} height={768} loading="lazy" decoding="async" className="w-full" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="rounded-full bg-accent/40 px-4 py-1 text-xs font-medium text-primary">Customer Care</span>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            Clients Adore Our <br /> Support Staff, And You Will Too
          </h2>
          <p className="mt-4 text-muted-foreground">
            Our team is here to guide you from the first conversation to launch — and far beyond. Real humans, real attention, real results.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {["High Standard", "Focus On People"].map((t) => (
              <div key={t} className="rounded-2xl border border-border bg-surface p-4">
                <div className="flex items-center gap-2 font-semibold"><Check className="h-4 w-4 text-primary" /> {t}</div>
                <p className="mt-1 text-xs text-muted-foreground">Crafted with care for every brand we partner with.</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
