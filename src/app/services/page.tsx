
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  Gavel, History, Search, UserCheck, Cpu, BarChart3, Coins,
  ArrowLeft, ArrowRight, ShieldCheck, Scale, Database
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const SERVICES = [
  {
    title: "Rights Administration",
    slug: "rights-administration",
    icon: Gavel,
    category: "Operations",
    description: "Management of intellectual property portfolios, including licensing, royalty collection, and estate coordination.",
  },
  {
    title: "Royalty Recovery",
    slug: "royalty-recovery",
    icon: Coins,
    category: "Financial",
    description: "Identification and recovery of unpaid or misallocated royalties across global collection systems.",
  },
  {
    title: "Copyright Research",
    slug: "copyright-research",
    icon: Search,
    category: "Forensics",
    description: "Deep legal and archival investigation into ownership, chain-of-title, and rights validity.",
  },
  {
    title: "Estate Representation",
    slug: "estate-representation",
    icon: UserCheck,
    category: "Advisory",
    description: "Support for heirs, families, and institutions managing creative legacies and complex successions.",
  },
  {
    title: "Archive Digitization",
    slug: "archive-digitization",
    icon: History,
    category: "Preservation",
    description: "Conversion of physical and analog collections into structured, museum-grade digital systems.",
  },
  {
    title: "Licensing & Monetization",
    slug: "licensing-monetization",
    icon: Cpu,
    category: "Growth",
    description: "Commercial licensing strategy across media, publishing, AI training, and archival use cases.",
  },
  {
    title: "Rights Intelligence Reports",
    slug: "rights-intelligence-reports",
    icon: BarChart3,
    category: "Intelligence",
    description: "Detailed analysis of ownership status, licensing potential, and commercial viability of intellectual assets.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="pt-16 pb-24 border-b border-foreground/5 bg-[#F8F4ED]">
        <div className="container mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40 hover:text-primary transition-colors mb-12"
          >
            <ArrowLeft className="w-3 h-3" /> Return to Index
          </Link>

          <div className="journal-grid items-start">
            <div className="col-span-12 lg:col-span-8">
              <div className="flex items-center gap-3 text-primary font-bold uppercase tracking-[0.3em] text-xs mb-6">
                <ShieldCheck className="w-5 h-5" />
                Core Capabilities
              </div>
              <h1 className="font-headline text-6xl md:text-8xl leading-[0.9] tracking-tighter mb-8 animate-staccato">
                Institutional-Grade <br />
                <span className="italic text-primary">Services.</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed font-light animate-staccato delay-1 max-w-3xl">
                Mervaine Holdings provides end-to-end stewardship across research, administration, and commercialization of intellectual property and archival assets.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-4 mt-12 lg:mt-0 flex justify-end">
              <div className="p-10 border-2 border-foreground bg-foreground text-background shadow-2xl animate-staccato delay-2 max-w-sm">
                <h3 className="font-headline text-2xl mb-4 uppercase leading-tight tracking-tighter">Tailored Stewardship.</h3>
                <p className="text-sm opacity-60 leading-relaxed mb-8">
                  Custom frameworks for institutional archives and large-scale estates. Request a bespoke briefing.
                </p>
                <Button className="w-full bg-background text-foreground hover:bg-background/90 rounded-none h-12 uppercase tracking-widest text-[10px] font-bold" asChild>
                  <Link href="/request-dossier">Request Dossier</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-foreground/10 border border-foreground/10">
            {SERVICES.map((service, i) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="bg-background p-10 flex flex-col group hover:bg-[#F8F4ED] transition-colors"
                >
                  <div className="mb-8 flex justify-between items-start">
                    <div className="p-3 border border-foreground/20 rounded-sm group-hover:border-primary/40 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-[10px] font-mono opacity-30 tracking-widest">0{i + 1}</span>
                  </div>

                  <div className="flex-grow">
                    <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-primary/60 mb-2 block">
                      {service.category}
                    </span>
                    <h3 className="font-headline text-2xl uppercase mb-4 tracking-tighter leading-none">
                      {service.title}
                    </h3>
                    <p className="text-foreground/60 text-sm leading-relaxed mb-8">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-foreground font-bold uppercase tracking-widest text-[10px] group-hover:gap-4 transition-all opacity-40 group-hover:opacity-100">
                    View Service Dossier <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              );
            })}

            {/* CTA tile */}
            <div className="bg-foreground p-10 flex flex-col justify-center text-background">
              <h3 className="font-headline text-3xl mb-4 leading-tight text-background">Custom <br />Engagement.</h3>
              <p className="text-sm font-medium mb-8 opacity-60">Bespoke frameworks for institutional archives and large-scale estate stewardship.</p>
              <Link
                href="/request-dossier"
                className="w-full py-4 border-2 border-background/20 font-bold uppercase tracking-widest text-xs hover:border-background transition-colors text-center text-background"
              >
                Request Dossier
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Positioning footer band */}
      <section className="py-32 bg-foreground text-background">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="text-secondary font-bold uppercase tracking-[0.4em] text-xs mb-8 block">Our Mandate</span>
            <h2 className="font-headline text-4xl md:text-6xl leading-[1.1] tracking-tighter mb-12">
              "Every archive holds dormant capital. We activate it through{" "}
              <span className="text-secondary italic">precision, law, and intelligence.</span>"
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-12 pt-12 border-t border-background/10">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-secondary" />
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Verified Continuity</span>
              </div>
              <div className="flex items-center gap-3">
                <Scale className="w-6 h-6 text-secondary" />
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Legal Stewardship</span>
              </div>
              <div className="flex items-center gap-3">
                <Database className="w-6 h-6 text-secondary" />
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Data Intelligence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
