
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  ShieldCheck, Scale, History, TrendingUp,
  ArrowLeft, ArrowRight, CheckCircle2, Lock, FileText
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const STATS = [
  { label: "Assets Preserved", value: "2.4M+", icon: History },
  { label: "Royalties Recovered", value: "$420M+", icon: TrendingUp },
  { label: "Chain-of-Title Verifications", value: "15k+", icon: ShieldCheck },
  { label: "Governance Compliance", value: "100%", icon: Scale },
];

const PRINCIPLES = [
  {
    icon: ShieldCheck,
    title: "Verified Continuity",
    description: "Every asset in our stewardship undergoes rigorous chain-of-title verification before any licensing or commercialization activity begins.",
  },
  {
    icon: Scale,
    title: "Legal Stewardship",
    description: "Our governance framework is built on internationally recognized legal standards, ensuring full compliance across every jurisdiction we operate in.",
  },
  {
    icon: Lock,
    title: "Custodial Integrity",
    description: "Assets entrusted to Mervaine Holdings are held to museum-grade custodial standards, with immutable audit trails and multi-layered oversight.",
  },
  {
    icon: FileText,
    title: "Transparent Reporting",
    description: "Clients receive comprehensive governance reports at every stage of stewardship, ensuring full visibility into every decision and transaction.",
  },
];

const CASE_STUDIES = [
  {
    ref: "08-B",
    accent: "primary",
    label: "Case Study",
    title: "The Lost Catalog of Elara Vance",
    body: "In 2022, Mervaine Rights identified over $12M in unpaid mechanical royalties spanning 30 years for the Vance estate. Our forensic accountants reconstructed the chain-of-title across 14 international jurisdictions, securing the legacy for future heirs.",
    cta: "Read Full Dossier",
  },
  {
    ref: "PR-41",
    accent: "secondary",
    label: "Preservation Record",
    title: "Project Helios Digitization",
    body: "Successfully digitized 45,000 glass plate negatives from the late 19th century. Using multi-spectral imaging, we recovered textual data that was previously invisible due to environmental degradation.",
    cta: "Archival Details",
  },
  {
    ref: "LE-07",
    accent: "primary",
    label: "Estate Governance",
    title: "The Morrison Literary Trust",
    body: "Mervaine established a multi-beneficiary governance model for a contested 22-title literary estate, creating a fiduciary framework that resolved inter-generational disputes and generated over $3.4M in licensing revenue within 18 months.",
    cta: "View Framework",
  },
];

export default function GovernancePage() {
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
                Trust & Governance
              </div>
              <h1 className="font-headline text-6xl md:text-8xl leading-[0.9] tracking-tighter mb-8 animate-staccato">
                The Integrity of <br />
                <span className="italic text-primary">the Ledger.</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed font-light animate-staccato delay-1 max-w-3xl">
                Mervaine Holdings operates with transparency and unyielding standards. Our governance framework ensures that every right is verified and every archive is preserved to international museum and legal standards.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-4 mt-12 lg:mt-0 flex justify-end">
              <div className="p-10 border-2 border-foreground bg-foreground text-background shadow-2xl animate-staccato delay-2 max-w-sm">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-secondary flex items-center justify-center">
                    <ShieldCheck className="w-8 h-8 text-foreground" />
                  </div>
                </div>
                <h3 className="font-headline text-2xl mb-4 uppercase leading-tight tracking-tighter text-center">Institutional Pledge</h3>
                <p className="text-sm italic opacity-70 leading-relaxed mb-8 text-center">
                  "To preserve is to honor. Every asset entrusted to us shall receive the highest standard of custodial care."
                </p>
                <div className="flex flex-col items-center">
                  <div className="w-24 h-px bg-secondary/40 mb-2" />
                  <span className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-60">The Board of Stewards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 border-b border-foreground/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="p-8 border-2 border-foreground/5 bg-[#FDF9F3] flex flex-col items-center text-center group hover:border-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-secondary mb-4 group-hover:scale-110 transition-transform" />
                  <span className="text-3xl md:text-4xl font-headline font-bold mb-2">{stat.value}</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-foreground/50">{stat.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24 bg-[#F8F4ED]">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Our Framework</span>
            <h2 className="font-headline text-5xl tracking-tighter leading-tight">
              Governance <span className="italic">Principles.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
            {PRINCIPLES.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="bg-[#F8F4ED] p-10 group hover:bg-background transition-colors">
                  <div className="p-3 border border-foreground/20 rounded-sm inline-block mb-6 group-hover:border-primary/40 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-headline text-2xl uppercase tracking-tighter mb-4">{p.title}</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">{p.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Precedent & Practice</span>
            <h2 className="font-headline text-5xl tracking-tighter leading-tight">
              Governance in <span className="italic">Action.</span>
            </h2>
          </div>
          <div className="space-y-12">
            {CASE_STUDIES.map((cs) => (
              <div
                key={cs.ref}
                className={`border-l-4 ${cs.accent === "primary" ? "border-primary" : "border-secondary"} pl-10 py-4`}
              >
                <span className={`text-xs font-bold uppercase tracking-widest ${cs.accent === "primary" ? "text-primary" : "text-secondary"} block mb-2`}>
                  {cs.label}: {cs.ref}
                </span>
                <h3 className="font-headline text-3xl mb-4">{cs.title}</h3>
                <p className="text-foreground/70 leading-relaxed mb-6 max-w-3xl">{cs.body}</p>
                <Link
                  href="/request-dossier"
                  className="text-xs font-bold uppercase tracking-widest underline decoration-primary underline-offset-4 hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  {cs.cta} <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="py-32 bg-foreground text-background">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="text-secondary font-bold uppercase tracking-[0.4em] text-xs mb-8 block">Governance Standards</span>
            <h2 className="font-headline text-4xl md:text-6xl leading-[1.1] tracking-tighter mb-12">
              Every right verified. Every archive honored. <span className="text-secondary italic">Without exception.</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-secondary text-foreground hover:bg-secondary/90 rounded-none h-12 uppercase tracking-widest text-[10px] font-bold px-10" asChild>
                <Link href="/request-dossier">Request Governance Briefing</Link>
              </Button>
              <Button variant="outline" className="border-background/20 text-background hover:bg-background/10 rounded-none h-12 uppercase tracking-widest text-[10px] font-bold px-10" asChild>
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
