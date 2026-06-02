
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const INDUSTRIES = [
  {
    name: "Private Estates",
    description: "Management of physical collections, family archives, and multi-generational intellectual property.",
    image: "industry-estates"
  },
  {
    name: "Music Catalogs",
    description: "Forensic royalty recovery, chain-of-title verification, and institutional licensing administration.",
    image: "industry-music"
  },
  {
    name: "Historical Societies",
    description: "Large-scale digitization projects and digital stewardship for museum-grade artifacts.",
    image: "hero-bg"
  }
];

export function Industries() {
  return (
    <section id="industries" className="py-24 border-t border-foreground/10 bg-[#FDF9F3]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-16">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Market Sectors</span>
          <h2 className="font-headline text-5xl tracking-tighter mb-8 leading-tight">
            Verticals of <span className="italic">Value.</span>
          </h2>
          <p className="text-xl text-foreground/70 leading-relaxed max-w-2xl">
            Our framework is designed to integrate seamlessly into diverse ecosystems where 
            preservation and rights management are mission-critical.
          </p>
        </div>

        <div className="journal-grid">
          {INDUSTRIES.map((industry, i) => {
            const imageData = PlaceHolderImages.find(img => img.id === industry.image);
            return (
              <div key={industry.name} className="col-span-12 md:col-span-4 group">
                <div className="relative aspect-[3/4] mb-6 overflow-hidden border border-foreground/10">
                  {imageData && (
                    <Image
                      src={imageData.imageUrl}
                      alt={industry.name}
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  )}
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-4 left-4 p-2 bg-background/90 text-[10px] font-bold uppercase tracking-widest border border-foreground/10">
                    SEC-0{i+1}
                  </div>
                </div>
                <h3 className="font-headline text-2xl mb-2 uppercase tracking-tighter">{industry.name}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
