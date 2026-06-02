
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Divisions } from "@/components/sections/Divisions";
import { AssetClassifier } from "@/components/sections/AssetClassifier";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { InquiryForm } from "@/components/sections/InquiryForm";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Divisions />
      <AssetClassifier />
      <CaseStudies />
      <InquiryForm />
      <Footer />
    </main>
  );
}
