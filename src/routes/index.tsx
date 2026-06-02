import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Stats } from "@/components/Stats";
import { Support } from "@/components/Support";
import { CtaBanner } from "@/components/CtaBanner";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "You Lar Agency " },
      { name: "description", content: "You Lar Agency turns ideas into experiences across graphic design, tourism, real estate, and publicity." },
    ],
    links: [
        { rel: "icon", href: "src/assets/1.ico" },
      ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <About />
      <CtaBanner />
      <Stats />
      <Support />
      <Faq />
      <CtaBanner id="apply" />
      <Footer />
    </main>
  );
}
