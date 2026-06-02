import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import { Palette, Plane, Building2, Megaphone } from "lucide-react";

const projects = [
  {
    title: "Summer Tourism Campaign.",
    category: "Tourism",
    icon: Plane,
    gradient: "from-purple-500/30 to-pink-500/30",
    desc: "Developed and promoted seasonal travel experiences across Algeria, including destinations such as Tlemcen, Béjaïa, and Algiers, along with organized tours to Tunisia through strategic partnerships.",
  },
  {
    title: "Real Estate Investment & Development",
    category: "Real Estate",
    icon:  Building2,
    gradient: "from-amber-400/30 to-orange-500/30",
    desc: "Promoted residential, commercial, and agricultural properties while supporting investment and development opportunities for clients and stakeholders.",
  },
  {
    title: "Automotive Trading Platform",
    category: "Publicity",
    icon: Megaphone,
    gradient: "from-blue-500/30 to-cyan-400/30",
    desc: "Created promotional campaigns for new and used vehicle sales, helping connect buyers and sellers through effective marketing and customer outreach strategies.",
  },
  {
    title: "Algerian Date Export Promotion Campaign",
    category: "Publicity",
    icon: Megaphone,
    gradient: "from-fuchsia-500/30 to-violet-500/30",
    desc: "Developed promotional initiatives to increase awareness of premium Algerian dates, support export activities, and strengthen relationships with business partners in target markets.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const popVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 260, damping: 20 },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 30, rotateX: -40, scale: 0.8 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 320, damping: 18 },
  },
};

const headline = "Projects That Speak For Themselves";

export function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary"
          >
            Our Work
          </motion.div>

          <motion.h2
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="mt-5 flex flex-wrap justify-center gap-x-3 gap-y-2 text-4xl font-bold md:text-5xl lg:text-6xl"
            style={{ perspective: 800 }}
          >
            {headline.split(" ").map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                className={
                  word === "Speak" || word === "Themselves"
                    ? "text-gradient inline-block"
                    : "inline-block"
                }
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-5 text-base text-muted-foreground md:text-lg"
          >
            A small selection of recent work across our four core practices.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {projects.map((p) => {
            const Icon = p.icon;
            return (
              <motion.div key={p.title} variants={popVariants}>
                <Card className="group relative h-full overflow-hidden border-border/60 bg-card/80 p-0 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:shadow-glow">
                  <div className={`relative flex h-40 items-center justify-center bg-linear-to-br ${p.gradient}`}>
                    <Icon className="h-12 w-12 text-foreground/80 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />
                  </div>
                  <div className="p-5">
                    <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {p.category}
                    </div>
                    <h3 className="mt-2 text-lg font-semibold leading-tight">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
