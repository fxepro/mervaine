
import { Gavel, History, Search, UserCheck, Cpu, BarChart3, Globe, ArrowRight, Coins } from "lucide-react";
import Link from "next/link";

const SERVICES = [
  {
    title: "Rights Administration",
    slug: "rights-administration",
    icon: Gavel,
    description: "Management of intellectual property portfolios, including licensing, royalty collection, and estate coordination.",
    category: "Operations"
  },
  {
    title: "Royalty Recovery",
    slug: "royalty-recovery",
    icon: Coins,
    description: "Identification and recovery of unpaid or misallocated royalties across global collection systems.",
    category: "Financial"
  },
  {
    title: "Copyright Research",
    slug: "copyright-research",
    icon: Search,
    description: "Deep legal and archival investigation into ownership, chain-of-title, and rights validity.",
    category: "Forensics"
  },
  {
    title: "Estate Representation",
    slug: "estate-representation",
    icon: UserCheck,
    description: "Support for heirs, families, and institutions managing creative legacies and complex successions.",
    category: "Advisory"
  },
  {
    title: "Archive Digitization",
    slug: "archive-digitization",
    icon: History,
    description: "Conversion of physical and analog collections into structured, museum-grade digital systems.",
    category: "Preservation"
  },
  {
    title: "Licensing & Monetization",
    slug: "licensing-monetization",
    icon: Cpu,
    description: "Commercial licensing strategy across media, publishing, AI training, and archival use cases.",
    category: "Growth"
  },
  {
    title: "Rights Intelligence Reports",
    slug: "rights-intelligence-reports",
    icon: BarChart3,
    description: "Detailed analysis of ownership status, licensing potential, and commercial viability of intellectual assets.",
    category: "Intelligence"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-3xl">
            <span className="text-secondary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Marwane Services</span>
            <h2 className="font-headline text-5xl md:text-7xl leading-[1] tracking-tighter">
              Institutional-Grade <br />
              <span className="text-secondary italic">Core Capabilities.</span>
            </h2>
          </div>
          <p className="max-w-xs text-background/50 text-sm leading-relaxed border-l border-background/20 pl-6 mb-2">
            Marwane Holdings provides end-to-end stewardship across research, administration, and commercialization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-background/10 border border-background/10">
          {SERVICES.map((service, i) => (
            <div key={service.title} className="bg-foreground p-10 flex flex-col group hover:bg-background/[0.02] transition-colors">
              <div className="mb-8 flex justify-between items-start">
                <div className="p-3 border border-background/20 rounded-sm">
                  <service.icon className="w-6 h-6 text-secondary" />
                </div>
                <span className="text-[10px] font-mono opacity-30 tracking-widest">0{i+1}</span>
              </div>
              
              <div className="flex-grow">
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-secondary/60 mb-2 block">
                  {service.category}
                </span>
                <h3 className="font-headline text-2xl uppercase mb-4 tracking-tighter leading-none">
                  {service.title}
                </h3>
                <p className="text-background/60 text-sm leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>

              <Link 
                href={`/services/${service.slug}`}
                className="flex items-center gap-2 text-background font-bold uppercase tracking-widest text-[10px] group-hover:gap-4 transition-all opacity-40 group-hover:opacity-100"
              >
                View Service Dossier <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          ))}
          
          <div className="bg-secondary p-10 flex flex-col justify-center text-foreground group">
            <h3 className="font-headline text-3xl mb-4 leading-tight">Tailored <br />Stewardship.</h3>
            <p className="text-sm font-medium mb-8 opacity-80">Custom frameworks for institutional archives and large-scale estates.</p>
            <Link 
              href="#inquiry"
              className="w-full py-4 border-2 border-foreground font-bold uppercase tracking-widest text-xs hover:bg-foreground hover:text-secondary transition-colors text-center"
            >
              Request Dossier
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
