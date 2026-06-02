import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

export function CtaBanner({ id }: { id?: string }) {
  return (
    <section id={id} className="px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-purple px-6 py-14 text-center text-primary-foreground shadow-glow"
      >
        <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-primary-glow/40 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-accent/40 blur-3xl" />
        <h2 className="relative text-2xl font-bold md:text-4xl">
          Apply For Free Guide. <br /> Build Yourself With This Free Guide.
        </h2>
        <a href="#contact" className="relative mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-cta px-6 py-3 text-sm font-semibold shadow-glow transition hover:scale-105">
          Get Started <ChevronRight className="h-4 w-4" />
        </a>
      </motion.div>
    </section>
  );
}
