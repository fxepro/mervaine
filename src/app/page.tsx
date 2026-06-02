
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Industries } from "@/components/sections/Industries";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { InquiryForm } from "@/components/sections/InquiryForm";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <Industries />
      <CaseStudies />
      <InquiryForm />
      <Footer />
    </main>
  );
}
