
import Image from "next/image";
import { Gavel, Archive, Database, ArrowRight } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const DIVISIONS = [
  {
    title: "Mervaine Rights",
    icon: Gavel,
    image: "rights-division",
    description: "Specialized intellectual property management, ownership verification, and global licensing administration.",
    action: "Review Portfolio"
  },
  {
    title: "Mervaine Archives",
    icon: Archive,
    image: "archives-division",
    description: "Preservation, digitization, and cataloging of historical collections with forensic attention to detail.",
    action: "View Archives"
  },
  {
    title: "Mervaine Intelligence",
    icon: Database,
    image: "intel-division",
    description: "Proprietary database tracking chain-of-title, status, and market valuation for high-value assets.",
    action: "Access Terminal"
  }
];

export function Divisions() {
  return (
    <section id="divisions" className="py-24 bg-foreground text-background">
      <div id="services" className="absolute -mt-24" /> {/* Services anchor point */}
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-secondary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Our Operations</span>
            <h2 className="font-headline text-4xl md:text-6xl leading-[1.1] tracking-tighter">
              Structural Stewardship <br />
              <span className="text-secondary italic">for Every Asset Class.</span>
            </h2>
          </div>
          <p className="max-w-xs text-background/60 text-sm leading-relaxed border-l border-background/20 pl-6">
            We operate three distinct pillars to ensure assets are protected, preserved, and properly valued in the modern landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-background/10">
          {DIVISIONS.map((div, i) => {
            const imageData = PlaceHolderImages.find(img => img.id === div.image);
            return (
              <div key={div.title} className={`group flex flex-col ${i < 2 ? 'md:border-r border-background/10' : ''} border-b md:border-b-0 border-background/10`}>
                <div className="aspect-[4/3] relative overflow-hidden">
                  {imageData && (
                    <Image
                      src={imageData.imageUrl}
                      alt={div.title}
                      fill
                      className="object-cover filter sepia-[0.3] brightness-75 group-hover:brightness-100 transition-all duration-500"
                    />
                  )}
                  <div className="absolute top-6 left-6">
                    <div className="w-12 h-12 bg-background flex items-center justify-center">
                      <div className="text-foreground">
                        <div className="flex items-center justify-center">
                           <div className="w-full h-full flex items-center justify-center p-2">
                             <div className="border-2 border-foreground w-8 h-8 flex items-center justify-center">
                                <div className="text-xs font-bold">0{i+1}</div>
                             </div>
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-10 flex-grow flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 border border-background/20">
                      <div className="p-2 bg-secondary/10">
                        <div className="text-secondary">
                          <div className="w-6 h-6 border-2 border-current flex items-center justify-center">
                            <div className="w-2 h-2 bg-current" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3 className="font-headline text-2xl uppercase tracking-tighter">{div.title}</h3>
                  </div>
                  
                  <p className="text-background/70 leading-relaxed mb-8 flex-grow">
                    {div.description}
                  </p>

                  <button className="flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-xs group-hover:gap-4 transition-all">
                    {div.action} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
