import { motion } from "motion/react";
import { Star, ChevronRight } from "lucide-react";
import team from "@/assets/team.webp";

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="rounded-full bg-accent/40 px-4 py-1 text-xs font-medium text-primary">About Us</span>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            Our Journey, <br /> Vision, And Values
          </h2>
          <p className="mt-5 max-w-lg text-muted-foreground">
            You Lar Agency was born from a passion for storytelling and design. We blend creative thinking with strategy to help brands across graphic design, tourism, real estate and publicity create lasting impact.
          </p>
          <a href="#contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-cta px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-105">
            Get Started <ChevronRight className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
          <div className="overflow-hidden rounded-3xl shadow-card">
            <img src={team} alt="You Lar creative team" width={1024} height={768} loading="lazy" decoding="async" className="w-full" />
          </div>
          <div className="absolute -top-4 right-4 flex items-center gap-2 rounded-2xl bg-surface px-4 py-3 shadow-glow ring-1 ring-border">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
            </div>
            <span className="text-sm font-semibold">5 Star</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
