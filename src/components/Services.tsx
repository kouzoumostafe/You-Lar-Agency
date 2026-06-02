import { motion } from "motion/react";
import { Palette, Plane, Home, Megaphone, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const services = [
  { icon: Palette, title: "Graphic Design", desc: "Branding, identity systems, and visuals that turn heads and tell your story." },
  { icon: Plane, title: "Tourism", desc: "Destination marketing and travel campaigns that move people — literally." },
  { icon: Home, title: "Real Estate", desc: "Property marketing, listings and visuals that close deals faster." },
  { icon: Megaphone, title: "Publicity", desc: "PR strategy and media campaigns that put your brand in the spotlight." },
];

export function Services() {
  const isMobile = useIsMobile();

  const itemVariants = isMobile
    ? {
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: { type: "tween" as const, duration: 0.45, ease: "easeOut" as const },
        },
      }
    : {
        hidden: { opacity: 0, y: 40, scale: 0.92, rotateX: -12 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          transition: { type: "spring" as const, stiffness: 220, damping: 18 },
        },
      };

  const hoverProps = isMobile
    ? {}
    : {
        whileHover: { y: -10, rotateX: 4, rotateY: -4, scale: 1.03 },
        transition: { type: "spring" as const, stiffness: 260, damping: 18 },
        style: { transformPerspective: 900 },
      };

  return (
    <section id="services" className="bg-gradient-soft py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="inline-block rounded-full bg-accent/40 px-4 py-1 text-xs font-medium text-primary">Services</span>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            We Offer A Wide Range Of <br className="hidden md:block" /> Creative Services.
          </h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: isMobile ? 0.08 : 0.12 } },
          }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={itemVariants}
              {...hoverProps}
              className="group relative overflow-hidden rounded-3xl bg-surface p-7 shadow-card ring-1 ring-border/50 will-change-transform"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-cta opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />
              <motion.div
                whileHover={isMobile ? undefined : { rotate: -8, scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300, damping: 12 }}
                className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-cta text-primary-foreground shadow-glow"
              >
                <s.icon className="h-6 w-6" />
              </motion.div>
              <h3 className="relative mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="relative mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <a
                href="#contact"
                className="relative mt-5 inline-flex translate-y-1 items-center gap-1 text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
              >
                Get Started{" "}
                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
