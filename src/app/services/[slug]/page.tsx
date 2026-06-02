
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, Gavel, ShieldCheck, Globe, History, CheckCircle2, FileText, Landmark } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";

const SERVICES_DATA: Record<string, any> = {
  "rights-administration": {
    title: "Rights Administration",
    category: "Operations",
    icon: Gavel,
    description: "Comprehensive management of intellectual property portfolios, ensuring rigorous legal oversight and strategic commercial utilization.",
    longDescription: `
      Rights Administration at Marwane Holdings is the cornerstone of our stewardship model. We provide a centralized, institutional-grade framework for the oversight of intellectual property, from musical catalogs and literary estates to scientific patents and film libraries. 
      
      Our methodology focuses on the unyielding verification of ownership and the optimization of licensing flows to ensure that assets are not only preserved but actively managed for maximum continuity and value.
    `,
    pillars: [
      {
        title: "Portfolio Management",
        description: "Active oversight of global rights portfolios including registration, maintenance, and defense.",
        icon: ShieldCheck
      },
      {
        title: "Royalty Collection",
        description: "Rigorous collection and distribution systems across international jurisdictions and media platforms.",
        icon: Globe
      },
      {
        title: "Estate Coordination",
        description: "Harmonizing rights management for multi-generational estates and institutional heirs.",
        icon: History
      }
    ],
    capabilities: [
      "Global Licensing Administration",
      "Chain-of-Title Verification",
      "Contractual Compliance Monitoring",
      "Digital Rights Management (DRM) Strategy",
      "Royalty Auditing and Forensic Accounting",
      "Heir and Beneficiary Coordination",
      "IP Portfolio Valuation"
    ]
  }
};

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES_DATA[slug];

  if (!service) {
    // Return a basic placeholder for other services not yet fully fleshed out
    if (["royalty-recovery", "copyright-research", "estate-representation", "archive-digitization", "licensing-monetization", "rights-intelligence-reports"].includes(slug)) {
      return (
        <main className="min-h-screen bg-background">
          <Navbar />
          <div className="container mx-auto px-6 py-24">
            <Link href="/#services" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-12">
              <ArrowLeft className="w-4 h-4" /> Back to Services
            </Link>
            <div className="max-w-4xl">
              <h1 className="font-headline text-6xl tracking-tighter mb-8 uppercase">{slug.replace(/-/g, ' ')}</h1>
              <p className="text-xl text-foreground/60 leading-relaxed italic">The dossier for this service is currently being archived. Please check back shortly for full institutional details.</p>
            </div>
          </div>
          <Footer />
        </main>
      );
    }
    return notFound();
  }

  const Icon = service.icon;

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-16 pb-24 border-b border-foreground/5">
        <div className="container mx-auto px-6">
          <Link href="/#services" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40 hover:text-primary transition-colors mb-12">
            <ArrowLeft className="w-3 h-3" /> Back to Intelligence Index
          </Link>
          
          <div className="journal-grid items-start">
            <div className="col-span-12 lg:col-span-7">
              <div className="flex items-center gap-3 text-primary font-bold uppercase tracking-[0.3em] text-xs mb-6">
                <Icon className="w-5 h-5" />
                {service.category} Division
              </div>
              <h1 className="font-headline text-6xl md:text-8xl leading-[0.9] tracking-tighter mb-8 animate-staccato">
                {service.title}.
              </h1>
              <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed font-light animate-staccato delay-1">
                {service.description}
              </p>
            </div>
            
            <div className="col-span-12 lg:col-span-4 lg:col-start-9 mt-12 lg:mt-0">
              <div className="p-8 border-2 border-foreground bg-foreground text-background shadow-2xl animate-staccato delay-2">
                <div className="flex items-center justify-between mb-8 border-b border-background/20 pb-4">
                  <span className="text-[10px] font-mono opacity-50">DOCUMENT: MAR-{slug.toUpperCase()}</span>
                  <div className="w-3 h-3 bg-secondary" />
                </div>
                <h3 className="font-headline text-2xl mb-4 uppercase">Institutional Access</h3>
                <p className="text-sm opacity-70 mb-8 leading-relaxed">
                  Request a specialized briefing or initiate a portfolio review with our stewardship directors.
                </p>
                <Button className="w-full h-12 bg-background text-foreground hover:bg-background/90 rounded-none uppercase tracking-widest text-[10px] font-bold">
                  Request Institutional Briefing
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 bg-[#F8F4ED]">
        <div className="container mx-auto px-6">
          <div className="journal-grid">
            <div className="col-span-12 lg:col-span-6">
              <h2 className="text-[10px] uppercase font-bold tracking-[0.4em] text-foreground/30 mb-8 block">Operational Mandate</h2>
              <div className="prose prose-lg">
                <p className="font-headline text-3xl leading-snug text-foreground/90 mb-8">
                  "The preservation of rights is the preservation of legacy."
                </p>
                <div className="space-y-6 text-foreground/70 leading-relaxed text-lg">
                  {service.longDescription.split('\n\n').map((paragraph: string, i: number) => (
                    <p key={i}>{paragraph.trim()}</p>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="col-span-12 lg:col-span-5 lg:col-start-8">
              <div className="border-t-2 border-foreground pt-8 mb-16">
                <h3 className="text-xs font-bold uppercase tracking-widest mb-8">Core Service Pillars</h3>
                <div className="space-y-12">
                  {service.pillars.map((pillar: any, i: number) => (
                    <div key={i} className="flex gap-6">
                      <div className="shrink-0 w-12 h-12 bg-foreground text-background flex items-center justify-center">
                        <pillar.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-headline text-xl uppercase mb-2">{pillar.title}</h4>
                        <p className="text-sm text-foreground/60 leading-relaxed">{pillar.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Checklist */}
      <section className="py-24 border-y border-foreground/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary mb-4 block">Operational Scope</span>
            <h2 className="font-headline text-4xl tracking-tighter mb-4">Functional Capabilities Matrix</h2>
            <p className="text-foreground/50">Comprehensive services delivered through our proprietary Marwane Intelligence engine.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.capabilities.map((cap: string, i: number) => (
              <div key={i} className="flex items-start gap-4 p-6 border border-foreground/5 bg-white shadow-sm hover:border-primary/20 transition-colors group">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="font-medium text-foreground/80">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
