import { motion } from "motion/react";
import { ChevronRight, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero pb-32 pt-32 text-primary-foreground">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-primary-glow blur-3xl animate-float" />
        <div className="absolute right-10 bottom-20 h-96 w-96 rounded-full bg-accent blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <Zap className="absolute right-10 top-32 h-8 w-8 text-primary-foreground/40 animate-float" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 text-xs font-medium ring-1 ring-primary-foreground/20 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Creative Agency
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl"
        >
          Your Partner in Design <br /> Tourism & Real Estate Growth
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base text-primary-foreground/80 md:text-lg"
        >
          We create impactful visual identities, promote travel experiences, and support real estate and business development through modern marketing strategies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex justify-center"
        >
          <a href="#services" className="group inline-flex items-center gap-2 rounded-full bg-gradient-cta px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-105">
            Get Started <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
