
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { InquiryForm } from "@/components/sections/InquiryForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-16 pb-4 bg-[#F8F4ED] border-b border-foreground/5">
        <div className="container mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40 hover:text-primary transition-colors mb-12"
          >
            <ArrowLeft className="w-3 h-3" /> Return to Index
          </Link>
        </div>
      </section>

      <InquiryForm />

      <Footer />
    </main>
  );
}
