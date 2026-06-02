
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section className="relative pt-12 pb-24 overflow-hidden border-b border-foreground/5">
      <div className="container mx-auto px-6">
        <div className="journal-grid">
          {/* Header Area */}
          <div className="col-span-12 lg:col-span-8 mb-12">
            <div className="flex items-center gap-3 text-primary font-bold uppercase tracking-[0.3em] text-xs mb-6 animate-staccato">
              <BookOpen className="w-4 h-4" />
              Preserving the Continuity of Culture
            </div>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter mb-8 animate-staccato delay-1">
              Stewardship for <br />
              <span className="text-primary italic">Generations</span> to Come.
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed animate-staccato delay-2">
              Mervaine Holdings manages the intersection of historical significance and future utility. 
              We provide institutional-grade preservation, rights management, and data intelligence 
              for estates, collections, and intellectual assets.
            </p>
          </div>

          {/* Action Area */}
          <div className="col-span-12 lg:col-span-4 flex flex-col justify-end lg:items-end mb-12 animate-staccato delay-3">
            <div className="w-full lg:max-w-xs space-y-4">
              <Button className="w-full h-14 bg-foreground text-background hover:bg-foreground/90 uppercase tracking-[0.2em] font-bold text-xs">
                Explore Divisions <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" className="w-full h-14 border-foreground/20 uppercase tracking-[0.2em] font-bold text-xs">
                Institutional Inquiry
              </Button>
            </div>
          </div>

          {/* Large Image - Journal Style Offset */}
          <div className="col-span-12 lg:col-span-10 lg:col-start-2 relative h-[500px] lg:h-[600px] mt-12 overflow-hidden border border-foreground/10 group">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                data-ai-hint="library archive"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent mix-blend-multiply" />
            <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end text-background">
              <div className="max-w-md">
                <span className="block text-xs uppercase tracking-widest opacity-80 mb-2">Internal Index: MH-1944-PR</span>
                <p className="font-headline text-2xl leading-tight">Mervaine Archives central repository for historical record keeping.</p>
              </div>
              <div className="hidden md:block">
                <div className="w-16 h-16 border border-background/40 flex items-center justify-center rounded-full">
                  <ArrowRight className="w-6 h-6 rotate-[-45deg]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
