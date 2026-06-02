
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, Sparkles, BarChart3, Brain, Database } from "lucide-react";
import Link from "next/link";

const CAPABILITIES = [
  {
    icon: Brain,
    title: "AI Asset Classification",
    description: "Our proprietary classification engine analyzes asset descriptions and routes them to the optimal Mervaine service stream in seconds.",
  },
  {
    icon: BarChart3,
    title: "Rights Intelligence Reports",
    description: "Detailed analysis of ownership status, licensing potential, and commercial viability for high-value intellectual assets.",
  },
  {
    icon: Database,
    title: "Catalog Performance Benchmarking",
    description: "Comparative analysis of asset catalogs against market benchmarks to identify underperforming or unlicensed rights.",
  },
  {
    icon: Sparkles,
    title: "Strategic Routing Engine",
    description: "Automated service path recommendations that match asset profiles to the most effective stewardship framework.",
  },
];

export default function IntelligencePage() {
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
                <Sparkles className="w-5 h-5" />
                Intelligence Engine
              </div>
              <h1 className="font-headline text-6xl md:text-8xl leading-[0.9] tracking-tighter mb-8 animate-staccato">
                Data-Driven <br />
                <span className="italic text-primary">Stewardship.</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed font-light animate-staccato delay-1 max-w-3xl">
                Mervaine's Intelligence division provides the analytical foundation for all strategic decisions — from asset classification to commercial viability assessments and rights mapping.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-4 mt-12 lg:mt-0 flex justify-end">
              <div className="p-10 border-2 border-foreground bg-foreground text-background shadow-2xl animate-staccato delay-2 max-w-sm w-full">
                <h3 className="font-headline text-2xl mb-4 uppercase leading-tight tracking-tighter">Initiate a Briefing.</h3>
                <p className="text-sm opacity-60 leading-relaxed mb-8">
                  Contact our Intelligence division to request a tailored rights analysis or asset viability report.
                </p>
                <Link
                  href="/#inquiry"
                  className="w-full py-4 border-2 border-background/20 font-bold uppercase tracking-widest text-xs hover:border-background transition-colors text-center block text-background"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 border-b border-foreground/10">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Core Functions</span>
            <h2 className="font-headline text-5xl tracking-tighter leading-tight">
              Intelligence <span className="italic">Capabilities.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
            {CAPABILITIES.map((cap) => {
              const Icon = cap.icon;
              return (
                <div key={cap.title} className="bg-background p-10 group hover:bg-[#F8F4ED] transition-colors">
                  <div className="p-3 border border-foreground/20 rounded-sm inline-block mb-6 group-hover:border-primary/40 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-headline text-2xl uppercase tracking-tighter mb-4">{cap.title}</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">{cap.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="py-32 bg-foreground text-background">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="text-secondary font-bold uppercase tracking-[0.4em] text-xs mb-8 block">Intelligence Division</span>
            <h2 className="font-headline text-4xl md:text-6xl leading-[1.1] tracking-tighter mb-12">
              Every asset holds a signal. We decode it with{" "}
              <span className="text-secondary italic">precision intelligence.</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/#inquiry"
                className="py-4 px-10 bg-secondary text-foreground font-bold uppercase tracking-widest text-xs hover:bg-secondary/90 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/services/rights-intelligence-reports"
                className="py-4 px-10 border-2 border-background/20 text-background font-bold uppercase tracking-widest text-xs hover:border-background transition-colors"
              >
                View Intelligence Reports
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
