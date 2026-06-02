
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { 
  Music, BookText, Film, Image as ImageIcon, History, Cpu, 
  ArrowLeft, ShieldCheck, Globe, Scale, Database, Zap, 
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const INDUSTRIES_DETAILED = [
  {
    name: "Music & Audio",
    icon: Music,
    image: "industry-music",
    summary: "Forensic royalty recovery, chain-of-title verification, and institutional licensing for global catalogs.",
    points: ["Recording catalogs", "Publishing rights", "Performance royalties", "Legacy artist estates"]
  },
  {
    name: "Literature & Publishing",
    icon: BookText,
    image: "industry-publishing",
    summary: "Stewardship for high-value literary assets, spanning historical manuscripts to contemporary academic archives.",
    points: ["Books and manuscripts", "Journals and essays", "Literary estates", "Academic archives"]
  },
  {
    name: "Film & Television",
    icon: Film,
    image: "industry-film",
    summary: "Comprehensive rights management and archival digitization for cinematic and documentary libraries.",
    points: ["Film libraries", "Documentary archives", "Script rights", "Distribution catalogs"]
  },
  {
    name: "Photography & Visual Art",
    icon: ImageIcon,
    image: "industry-art",
    summary: "Preservation and monetization of fine art estates and institutional image collections.",
    points: ["Photographic archives", "Fine art estates", "Museum collections", "Historical image libraries"]
  },
  {
    name: "Historical & Cultural Archives",
    icon: History,
    image: "hero-bg",
    summary: "Museum-grade digital stewardship for institutional records and multi-generational private collections.",
    points: ["National archives", "Private collections", "Institutional records", "Cultural heritage datasets"]
  },
  {
    name: "Data & Artificial Intelligence",
    icon: Cpu,
    image: "industry-ai",
    summary: "Ethical licensing of structured data and corpora for generative AI development and neural training.",
    points: ["Training datasets", "Licensed text/image corpora", "Structured knowledge systems", "Rights-cleared AI inputs"]
  }
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-16 pb-24 border-b border-foreground/5 bg-[#F8F4ED]">
        <div className="container mx-auto px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40 hover:text-primary transition-colors mb-12">
            <ArrowLeft className="w-3 h-3" /> Return to Index
          </Link>

          <div className="journal-grid items-start">
            <div className="col-span-12 lg:col-span-8">
              <div className="flex items-center gap-3 text-primary font-bold uppercase tracking-[0.3em] text-xs mb-6">
                <Globe className="w-5 h-5" />
                Global Operational Scope
              </div>
              <h1 className="font-headline text-6xl md:text-8xl leading-[0.9] tracking-tighter mb-8 animate-staccato">
                Industries We <br />
                <span className="italic text-primary">Serve.</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed font-light animate-staccato delay-1 max-w-3xl">
                Mervaine Holdings operates across creative, cultural, and informational industries where intellectual property and archival assets form long-term value systems.
              </p>
            </div>
            
            <div className="col-span-12 lg:col-span-4 mt-12 lg:mt-0 flex justify-end">
              <div className="p-10 border-2 border-foreground bg-foreground text-background shadow-2xl animate-staccato delay-2 max-w-sm">
                <h3 className="font-headline text-2xl mb-4 uppercase leading-tight tracking-tighter">The Intersections of Value.</h3>
                <p className="text-sm opacity-60 leading-relaxed mb-8">
                  We specialize in sectors where preservation and rights management are mission-critical to the continuity of cultural and financial heritage.
                </p>
                <Button className="w-full bg-background text-foreground hover:bg-background/90 rounded-none h-12 uppercase tracking-widest text-[10px] font-bold" asChild>
                  <Link href="/request-dossier">Request Sector Briefing</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="space-y-32">
            {INDUSTRIES_DETAILED.map((industry, index) => {
              const imageData = PlaceHolderImages.find(img => img.id === industry.image);
              const isEven = index % 2 === 0;
              const Icon = industry.icon;
              const slug = industry.name.toLowerCase().replace(/ /g, '-').replace(/&/g, 'and');

              return (
                <div key={industry.name} id={slug} className="journal-grid items-center group">
                  <div className={`col-span-12 lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative aspect-[16/10] overflow-hidden border border-foreground/10 shadow-sm">
                      {imageData && (
                        <Image
                          src={imageData.imageUrl}
                          alt={industry.name}
                          fill
                          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                        />
                      )}
                      <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
                      <div className="absolute top-0 right-0 p-4 border-l border-b border-foreground/10 bg-background/50 backdrop-blur-sm text-[10px] font-mono opacity-50">
                        REF: IND-{index + 100}
                      </div>
                    </div>
                  </div>

                  <div className={`col-span-12 lg:col-span-5 ${isEven ? 'lg:order-2 lg:col-start-8' : 'lg:order-1 lg:col-start-1'}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-primary flex items-center justify-center text-background">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h2 className="font-headline text-4xl uppercase tracking-tighter">{industry.name}</h2>
                    </div>
                    
                    <p className="text-lg text-foreground/80 leading-relaxed mb-8 border-l-2 border-primary/30 pl-6">
                      {industry.summary}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-10">
                      {industry.points.map((point) => (
                        <div key={point} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground/60">
                          <Zap className="w-3 h-3 text-secondary" />
                          {point}
                        </div>
                      ))}
                    </div>

                    <Button variant="outline" className="rounded-none border-foreground/20 uppercase tracking-[0.2em] text-[10px] h-12 px-8 font-bold group-hover:border-primary transition-colors" asChild>
                      <Link href={`/request-dossier?sector=${slug}`}>
                        Request {industry.name} Briefing <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Positioning Statement */}
      <section className="py-32 bg-foreground text-background">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="text-secondary font-bold uppercase tracking-[0.4em] text-xs mb-8 block">Positioning Statement</span>
            <h2 className="font-headline text-4xl md:text-6xl leading-[1.1] tracking-tighter mb-12">
              "We operate at the intersection of culture, law, and data—where historical creative output becomes <span className="text-secondary italic">structured, licensed, and economically active</span> again."
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
