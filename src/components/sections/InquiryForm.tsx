
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin } from "lucide-react";

export function InquiryForm() {
  return (
    <section id="inquiry" className="py-24">
      <div className="container mx-auto px-6">
        <div className="journal-grid">
          <div className="col-span-12 lg:col-span-4 mb-16">
            <h2 className="font-headline text-5xl leading-none tracking-tighter mb-8">
              Establish <br />
              <span className="text-primary italic">Contact.</span>
            </h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 border border-foreground/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-foreground/40">General Correspondence</span>
                  <p className="font-medium">contact@mervaine.holdings</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 border border-foreground/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-foreground/40">Institutional Access</span>
                  <p className="font-medium">+1 (800) MER-VAIN</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 border border-foreground/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-foreground/40">Registrar's Office</span>
                  <p className="font-medium leading-relaxed">
                    144 Preservation Row<br />
                    Heritage District, VA 20109
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <div className="p-10 border border-foreground bg-background relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 border-l border-b border-foreground text-[10px] font-mono opacity-30">
                FORM: 104-INQ
              </div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest">Full Name / Entity</label>
                    <Input placeholder="Johnathan Q. Mervaine" className="rounded-none border-foreground/20 focus-visible:ring-primary" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest">Email Address</label>
                    <Input placeholder="name@domain.com" type="email" className="rounded-none border-foreground/20 focus-visible:ring-primary" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest">Nature of Inquiry</label>
                  <Select>
                    <SelectTrigger className="rounded-none border-foreground/20">
                      <SelectValue placeholder="Select channel..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rights">Rights Portfolio Submission</SelectItem>
                      <SelectItem value="archives">Archives Preservation Request</SelectItem>
                      <SelectItem value="intelligence">Intelligence Terminal Access</SelectItem>
                      <SelectItem value="estate">Estate Representation</SelectItem>
                      <SelectItem value="other">General Institutional</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest">Inquiry Details</label>
                  <Textarea placeholder="Please provide a high-level summary of your request..." className="min-h-[150px] rounded-none border-foreground/20 focus-visible:ring-primary" />
                </div>

                <div className="flex items-center gap-2 py-4">
                  <input type="checkbox" className="w-4 h-4 rounded-none border-foreground accent-primary" id="privacy" />
                  <label htmlFor="privacy" className="text-xs text-foreground/60 italic">
                    I acknowledge that this submission is subject to Mervaine Holdings' institutional non-disclosure standards.
                  </label>
                </div>

                <Button className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-none h-14 uppercase tracking-widest font-bold">
                  Dispatch Submission
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
