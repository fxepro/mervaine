
import { ShieldCheck, Scale, History, TrendingUp } from "lucide-react";

const STATS = [
  { label: "Assets Preserved", value: "2.4M+", icon: History },
  { label: "Royalties Recovered", value: "$420M+", icon: TrendingUp },
  { label: "Chain-of-Title Verifications", value: "15k+", icon: ShieldCheck },
  { label: "Governance Compliance", value: "100%", icon: Scale },
];

export function CaseStudies() {
  return (
    <section id="governance" className="py-24 border-t border-foreground/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-16">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Trust & Governance</span>
          <h2 className="font-headline text-5xl tracking-tighter mb-8 leading-tight">
            The Integrity of the <span className="italic">Ledger.</span>
          </h2>
          <p className="text-xl text-foreground/70 leading-relaxed">
            Mervaine Holdings operates with transparency and unyielding standards. 
            Our governance framework ensures that every right is verified and every archive is preserved 
            to international museum and legal standards.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="p-8 border-2 border-foreground/5 bg-[#FDF9F3] flex flex-col items-center text-center group hover:border-primary/20 transition-colors">
              <stat.icon className="w-8 h-8 text-secondary mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-3xl md:text-4xl font-headline font-bold mb-2">{stat.value}</span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-foreground/50">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="journal-grid">
          <div className="col-span-12 lg:col-span-6 space-y-12">
            <div className="border-l-4 border-primary pl-10 py-4">
              <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">Case Study: 08-B</span>
              <h3 className="font-headline text-3xl mb-4">The Lost Catalog of Elara Vance</h3>
              <p className="text-foreground/70 leading-relaxed mb-6">
                In 2022, Mervaine Rights identified over $12M in unpaid mechanical royalties spanning 30 years 
                for the Vance estate. Our forensic accountants reconstructed the chain-of-title across 
                14 international jurisdictions, securing the legacy for future heirs.
              </p>
              <button className="text-xs font-bold uppercase tracking-widest underline decoration-primary underline-offset-4">Read Full Dossier</button>
            </div>
            
            <div className="border-l-4 border-secondary pl-10 py-4">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-2">Preservation Record</span>
              <h3 className="font-headline text-3xl mb-4">Project Helios Digitization</h3>
              <p className="text-foreground/70 leading-relaxed mb-6">
                Successfully digitized 45,000 glass plate negatives from the late 19th century. 
                Using multi-spectral imaging, we recovered textual data that was previously invisible 
                due to environmental degradation.
              </p>
              <button className="text-xs font-bold uppercase tracking-widest underline decoration-secondary underline-offset-4">Archival Details</button>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 lg:col-start-8 flex flex-col justify-center">
            <div className="p-12 bg-foreground text-background text-center relative">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-secondary flex items-center justify-center">
                 <ShieldCheck className="w-8 h-8 text-foreground" />
               </div>
               <h4 className="font-headline text-2xl mb-4 mt-4 uppercase">Institutional Pledge</h4>
               <p className="text-sm italic opacity-80 leading-relaxed mb-8">
                 "To preserve is to honor. Mervaine Holdings pledges that every asset entrusted to us 
                 shall receive the highest standard of custodial care, ensuring it remains an active 
                 part of the human record forever."
               </p>
               <div className="flex flex-col items-center">
                 <div className="w-24 h-px bg-secondary/40 mb-2" />
                 <span className="text-[10px] uppercase tracking-[0.4em] font-bold">The Board of Stewards</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
