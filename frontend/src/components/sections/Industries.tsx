
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Music, BookText, Film, Image as ImageIcon, History, Cpu } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const INDUSTRIES = [
  {
    name: "Music & Audio",
    description: "Recording catalogs, publishing rights, and legacy artist estates.",
    image: "industry-music",
    icon: Music
  },
  {
    name: "Literature & Publishing",
    description: "Books, manuscripts, and literary estates for academic archives.",
    image: "industry-publishing",
    icon: BookText
  },
  {
    name: "Film & Television",
    description: "Film libraries, documentary archives, and script rights catalogs.",
    image: "industry-film",
    icon: Film
  },
  {
    name: "Photography & Art",
    description: "Fine art estates, museum collections, and image libraries.",
    image: "industry-art",
    icon: ImageIcon
  },
  {
    name: "Historical Archives",
    description: "National archives and private collections of institutional records.",
    image: "hero-bg",
    icon: History
  },
  {
    name: "Data & AI",
    description: "Training datasets and licensed corpora for AI development.",
    image: "industry-ai",
    icon: Cpu
  }
];

export function Industries() {
  return (
    <section id="industries" className="py-24 border-t border-foreground/10 bg-[#FDF9F3]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Market Sectors</span>
            <h2 className="font-headline text-5xl md:text-6xl tracking-tighter mb-4 leading-tight">
              Verticals of <span className="italic text-primary">Value.</span>
            </h2>
            <p className="text-xl text-foreground/70 leading-relaxed max-w-2xl">
              Operating at the intersection of culture, law, and data—where historical creative output becomes economically active again.
            </p>
          </div>
          <Link href="/industries" className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 group border-b border-foreground pb-2">
            View Industry Index <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {INDUSTRIES.map((industry, i) => {
            const imageData = PlaceHolderImages.find(img => img.id === industry.image);
            const Icon = industry.icon;
            return (
              <Link key={industry.name} href={`/industries#${industry.name.toLowerCase().replace(/ /g, '-')}`} className="group">
                <div className="relative aspect-[3/4] mb-8 overflow-hidden border border-foreground/10">
                  {imageData && (
                    <Image
                      src={imageData.imageUrl}
                      alt={industry.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-6 left-6 p-3 bg-background/90 text-primary border border-foreground/10">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="flex items-center justify-between mb-3">
                   <h3 className="font-headline text-2xl uppercase tracking-tighter">{industry.name}</h3>
                   <span className="text-[10px] font-mono opacity-30">SEC-0{i+1}</span>
                </div>
                <p className="text-sm text-foreground/50 leading-relaxed mb-6">
                  {industry.description}
                </p>
                <div className="w-12 h-px bg-primary/30 group-hover:w-full transition-all duration-500" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
