
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ShieldCheck, FileText, Send, ArrowLeft, Lock, Globe } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function RequestDossierPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-16 pb-24 border-b border-foreground/5">
        <div className="container mx-auto px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40 hover:text-primary transition-colors mb-12">
            <ArrowLeft className="w-3 h-3" /> Return to Index
          </Link>

          <div className="journal-grid items-start">
            <div className="col-span-12 lg:col-span-7">
              <div className="flex items-center gap-3 text-primary font-bold uppercase tracking-[0.3em] text-xs mb-6">
                <ShieldCheck className="w-5 h-5" />
                Institutional Access
              </div>
              <h1 className="font-headline text-5xl md:text-7xl leading-[0.9] tracking-tighter mb-8 animate-staccato">
                Request Service <br />
                <span className="italic text-primary">Dossier.</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed font-light animate-staccato delay-1 max-w-2xl">
                Initiate a formal inquiry for specialized stewardship services. Our directors will review your submission and provide a tailored operational briefing within 48 hours.
              </p>

              <div className="mt-16 space-y-12 animate-staccato delay-2">
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 border border-foreground/10 flex items-center justify-center">
                    <Lock className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-headline text-xl uppercase mb-2">Confidential Handling</h4>
                    <p className="text-sm text-foreground/50 leading-relaxed">All submissions are protected under Marwane's institutional non-disclosure standards.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 border border-foreground/10 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-headline text-xl uppercase mb-2">Global Coordination</h4>
                    <p className="text-sm text-foreground/50 leading-relaxed">Our reach extends across 24 international jurisdictions for rights and royalty management.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-5 mt-12 lg:mt-0">
              <div className="p-10 border-2 border-foreground bg-background shadow-2xl relative animate-staccato delay-3">
                <div className="absolute top-0 right-0 p-4 border-l border-b border-foreground text-[10px] font-mono opacity-30">
                  REF: FORM-INST-104
                </div>
                
                <h3 className="font-headline text-2xl mb-8 uppercase tracking-tight">Institutional Inquiry</h3>
                
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-foreground/50">Legal Entity / Full Name</label>
                    <Input placeholder="Institution or Principal Name" className="rounded-none border-foreground/20 focus-visible:ring-primary h-12" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-foreground/50">Official Email</label>
                    <Input placeholder="name@domain.com" type="email" className="rounded-none border-foreground/20 focus-visible:ring-primary h-12" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-foreground/50">Primary Service Interest</label>
                    <Select>
                      <SelectTrigger className="rounded-none border-foreground/20 h-12">
                        <SelectValue placeholder="Select Service Path..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rights">Rights Administration</SelectItem>
                        <SelectItem value="recovery">Royalty Recovery</SelectItem>
                        <SelectItem value="research">Copyright Research</SelectItem>
                        <SelectItem value="estate">Estate Representation</SelectItem>
                        <SelectItem value="digitization">Archive Digitization</SelectItem>
                        <SelectItem value="monetization">Licensing & Monetization</SelectItem>
                        <SelectItem value="intelligence">Rights Intelligence Reports</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-foreground/50">Brief Asset Summary</label>
                    <Textarea 
                      placeholder="Describe the scope of the assets or inquiry..." 
                      className="min-h-[120px] rounded-none border-foreground/20 focus-visible:ring-primary text-sm" 
                    />
                  </div>

                  <div className="flex items-start gap-3 py-4">
                    <input type="checkbox" className="w-4 h-4 mt-0.5 rounded-none border-foreground accent-primary" id="nda-agree" />
                    <label htmlFor="nda-agree" className="text-[10px] text-foreground/60 italic leading-tight">
                      I acknowledge that this inquiry initiates a formal professional engagement subject to Marwane Holdings' standard confidentiality protocols.
                    </label>
                  </div>

                  <Button className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-none h-14 uppercase tracking-[0.2em] font-bold text-xs">
                    Dispatch Request <Send className="ml-2 w-3 h-3" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
