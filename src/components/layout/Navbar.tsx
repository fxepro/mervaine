
"use client";

import Link from "next/link";
import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="border-b border-foreground/10 sticky top-0 bg-background/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary flex items-center justify-center text-primary-foreground font-headline text-2xl font-bold">
              M
            </div>
            <span className="font-headline text-2xl tracking-tight hidden md:block">
              MERVAINE <span className="font-light">HOLDINGS</span>
            </span>
          </Link>
          
          <div className="hidden lg:flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/70">
            <Link href="#divisions" className="hover:text-primary transition-colors">Divisions</Link>
            <Link href="#services" className="hover:text-primary transition-colors">Services</Link>
            <Link href="#industries" className="hover:text-primary transition-colors">Industries</Link>
            <Link href="#governance" className="hover:text-primary transition-colors">Governance</Link>
            <Link href="#inquiry" className="hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden md:inline-flex opacity-50">
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="outline" className="border-foreground/20 uppercase tracking-widest text-[10px] h-10 px-6 font-bold hidden md:inline-flex">
            Institutional Access
          </Button>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
