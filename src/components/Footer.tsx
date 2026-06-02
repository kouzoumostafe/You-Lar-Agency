import { Mail, Phone, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-gradient-purple text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <span className="font-display text-xl font-bold">You Lar Agency</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-primary-foreground/70">
            Creative agency for graphic design, tourism, real estate and publicity.
          </p>
          <a
            href="https://www.instagram.com/wr_legacy1?igsh=MTdzeDZwMXd2MXJnYg=="
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm ring-1 ring-primary-foreground/20 transition hover:bg-primary-foreground/20"
          >
            <Instagram className="h-4 w-4" /> @wr_legacy1
          </a>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@yoular.agency</div>
          <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (480) 555-0103</div>
          <p className="text-primary-foreground/70">Mon–Fri 9AM – 6PM</p>
        </div>
        <div className="text-sm text-primary-foreground/70">
          <p>© {new Date().getFullYear()} You Lar Agency. All rights reserved.</p>
          <div className="mt-3 flex gap-4">
            <a href="#" className="hover:text-primary-foreground">Privacy</a>
            <a href="#" className="hover:text-primary-foreground">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
