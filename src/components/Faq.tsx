import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "motion/react";

const items = [
  { q: "How does it work?", a: "We start with a discovery call, define goals, then design and deliver in iterative sprints." },
  { q: "What services do you offer?", a: "Graphic design, tourism marketing, real estate marketing, and publicity / PR campaigns." },
  { q: "How much does it cost?", a: "Pricing depends on scope. We offer transparent quotes after our first call — no surprises." },
  { q: "How do we start?", a: "Send a message via the contact section. We respond within 24 hours and propose a kickoff plan." },
  { q: "What is your revisions policy?", a: "Every project includes generous revision rounds to make sure the result feels exactly right." },
];

export function Faq() {
  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-accent/40 px-4 py-1 text-xs font-medium text-primary">FAQ</span>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">Frequently Asked Questions.</h2>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10">
          <Accordion type="single" collapsible className="space-y-3">
            {items.map((it, i) => (
              <AccordionItem key={i} value={`i-${i}`} className="rounded-2xl border border-border bg-surface px-5 shadow-soft">
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline">{it.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{it.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
