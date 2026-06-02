
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 border-t border-foreground/10 bg-[#FDF9F3]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-foreground/5 pb-12 mb-12">
          <Link href="/" className="flex items-center gap-3">
             <div className="w-12 h-12 bg-primary flex items-center justify-center text-primary-foreground font-headline text-3xl font-bold">M</div>
             <div className="text-left">
               <span className="font-headline text-2xl tracking-tighter block leading-none">MARWANE</span>
               <span className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-50">Holdings</span>
             </div>
          </Link>
          
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-primary transition-colors">Privacy Charter</a>
            <a href="#" className="hover:text-primary transition-colors">Stewardship Terms</a>
            <Link href="/request-dossier" className="hover:text-primary transition-colors">Institutional Access</Link>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono opacity-40">
          <span>&copy; {new Date().getFullYear()} MARWANE HOLDINGS GROUP. ALL RIGHTS RESERVED.</span>
          <div className="flex gap-4">
            <span>INDEX: SEC-14-192</span>
            <span>LOC: EST-009</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
