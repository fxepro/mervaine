
"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Governance", href: "/governance" },
  { label: "Intelligence", href: "/intelligence" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="border-b border-foreground/10 sticky top-0 bg-background/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between relative">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" onClick={() => setMobileOpen(false)}>
            <div className="w-10 h-10 bg-primary flex items-center justify-center text-primary-foreground font-headline text-2xl font-bold">
              M
            </div>
            <span className="font-headline text-2xl tracking-tight hidden md:block">
              MERVAINE <span className="font-light">HOLDINGS</span>
            </span>
          </Link>

          {/* Centered nav links */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-bold uppercase tracking-[0.15em] text-foreground/70 absolute left-1/2 -translate-x-1/2">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hidden md:inline-flex opacity-50">
              <Search className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              className="border-foreground/20 uppercase tracking-widest text-[10px] h-10 px-6 font-bold hidden md:inline-flex"
              asChild
            >
              <Link href="/request-dossier">Institutional Access</Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile menu drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-20 z-40 bg-background border-t border-foreground/10 flex flex-col px-6 py-10 gap-8">
          <nav className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-bold uppercase tracking-[0.2em] text-foreground/70 hover:text-primary transition-colors border-b border-foreground/10 pb-6"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/request-dossier"
            onClick={() => setMobileOpen(false)}
            className="mt-auto w-full py-4 border-2 border-foreground font-bold uppercase tracking-widest text-xs hover:bg-foreground hover:text-background transition-colors text-center"
          >
            Institutional Access
          </Link>
        </div>
      )}
    </>
  );
}
