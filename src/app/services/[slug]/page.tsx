
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { 
  ArrowLeft, Gavel, ShieldCheck, Globe, History, CheckCircle2, 
  TrendingUp, Coins, SearchCheck, FileSearch, Landmark, BarChart3, 
  Cpu, UserCheck, Search, Scale, Database, FileText
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";

const SERVICES_DATA: Record<string, any> = {
  "rights-administration": {
    title: "Rights Administration",
    category: "Operations",
    icon: Gavel,
    description: "Comprehensive management of intellectual property portfolios, ensuring rigorous legal oversight and strategic commercial utilization.",
    longDescription: `
      Rights Administration at Marwane Holdings is the cornerstone of our stewardship model. We provide a centralized, institutional-grade framework for the oversight of intellectual property, from musical catalogs and literary estates to scientific patents and film libraries. 
      
      Our methodology focuses on the unyielding verification of ownership and the optimization of licensing flows to ensure that assets are not only preserved but actively managed for maximum continuity and value.
    `,
    pillars: [
      {
        title: "Portfolio Management",
        description: "Active oversight of global rights portfolios including registration, maintenance, and defense.",
        icon: ShieldCheck
      },
      {
        title: "Royalty Collection",
        description: "Rigorous collection and distribution systems across international jurisdictions and media platforms.",
        icon: Globe
      },
      {
        title: "Estate Coordination",
        description: "Harmonizing rights management for multi-generational estates and institutional heirs.",
        icon: History
      }
    ],
    capabilities: [
      "Global Licensing Administration",
      "Chain-of-Title Verification",
      "Contractual Compliance Monitoring",
      "Digital Rights Management (DRM) Strategy",
      "Royalty Auditing and Forensic Accounting",
      "Heir and Beneficiary Coordination",
      "IP Portfolio Valuation"
    ]
  },
  "royalty-recovery": {
    title: "Royalty Recovery",
    category: "Financial",
    icon: Coins,
    description: "Identification and recovery of unpaid or misallocated royalties across global collection systems and digital platforms.",
    longDescription: `
      In the modern digital economy, the flow of royalties is often obscured by systemic fragmentation and metadata degradation. Marwane's Royalty Recovery division operates as a forensic financial entity, dedicated to identifying and reclaiming capital that has been lost to 'black box' funds or misallocated due to historical tracking errors.
      
      We leverage proprietary data intelligence to audit international collection societies, streaming platforms, and broadcast entities. Our mission is to bridge the gap between creative output and economic reward, ensuring that rights holders receive every cent they are legally owed.
    `,
    pillars: [
      {
        title: "Forensic Auditing",
        description: "Deep-dive analysis into historical royalty flows to identify structural misallocations.",
        icon: FileSearch
      },
      {
        title: "Global Reclamation",
        description: "Navigating international collection societies and digital DSPs to secure unclaimed funds.",
        icon: Globe
      },
      {
        title: "Arrears Settlement",
        description: "Aggressive pursuit and negotiation of past-due payments for established rights holders.",
        icon: TrendingUp
      }
    ],
    capabilities: [
      "Historical Performance Audits",
      "Black Box Fund Identification",
      "Suspense Account Resolution",
      "Global DSP Metadata Scrubbing",
      "International Society Conflict Management",
      "Mechanical & Performance Royalty Tracking",
      "Forensic Accounting Dossiers"
    ]
  },
  "copyright-research": {
    title: "Copyright Research",
    category: "Forensics",
    icon: Search,
    description: "Deep legal and archival investigation into ownership, chain-of-title, and rights validity for high-value assets.",
    longDescription: `
      Copyright Research at Marwane Holdings is an exercise in meticulous truth-seeking. We provide institutional heirs and investors with absolute clarity regarding the legal standing of their assets. 
      
      Our researchers navigate global copyright registries, physical archives, and historical contracts to construct a definitive chain-of-title. This process is essential for validating ownership prior to acquisition, litigation, or large-scale commercialization.
    `,
    pillars: [
      {
        title: "Chain-of-Title Analysis",
        description: "Verifying every transfer of ownership from the moment of creation to the present day.",
        icon: Landmark
      },
      {
        title: "Legal Clearance",
        description: "Determining the exact legal status and expiration dates of copyright protection globally.",
        icon: Scale
      },
      {
        title: "Archival Forensics",
        description: "Retrieving lost documentation and physical evidence to support ownership claims.",
        icon: History
      }
    ],
    capabilities: [
      "Global Copyright Registry Searches",
      "Assignment and Transfer Verification",
      "Termination Rights Analysis",
      "Work-for-Hire Status Review",
      "International Reciprocity Assessment",
      "Litigation Support Documentation",
      "Ownership Conflict Resolution"
    ]
  },
  "estate-representation": {
    title: "Estate Representation",
    category: "Advisory",
    icon: UserCheck,
    description: "Support for heirs, families, and institutions managing creative legacies and complex successions.",
    longDescription: `
      Estate Representation at Marwane Holdings is an exercise in sophisticated advocacy and long-term stewardship. We serve as the bridge between the personal sentiments of heirs and the commercial realities of the global marketplace. 
      
      Our team provides institutional-grade support for the management of creative legacies, ensuring that successions are handled with the utmost discretion and legal precision. We coordinate with family offices, legal counsel, and financial trustees to maintain the integrity of the asset while providing a stable governance framework for multi-generational growth.
    `,
    pillars: [
      {
        title: "Legacy Stewardship",
        description: "Long-term strategic planning to ensure the cultural and commercial influence of the creator endures.",
        icon: Landmark
      },
      {
        title: "Heir Coordination",
        description: "Facilitating transparent communication and governance between multiple beneficiaries and stakeholders.",
        icon: UserCheck
      },
      {
        title: "Succession Frameworks",
        description: "Implementing structural legal and fiduciary solutions for the orderly transition of asset control.",
        icon: ShieldCheck
      }
    ],
    capabilities: [
      "Beneficiary Governance & Voting Models",
      "Family Office Integration & Reporting",
      "Institutional Trustee Advisory",
      "Philanthropic Bequest Management",
      "Dispute Mediation & Conflict Resolution",
      "Posthumous Brand Identity Strategy",
      "Estate Asset Inventory & Valuation",
      "Inter-generational Transfer Planning"
    ]
  },
  "archive-digitization": {
    title: "Archive Digitization",
    category: "Preservation",
    icon: History,
    description: "Conversion of physical and analog collections into structured, museum-grade digital systems.",
    longDescription: "State-of-the-art archival preservation using high-resolution digitization and AI-enhanced metadata tagging for historical records.",
    pillars: [
      { title: "Forensic Imaging", description: "Ultra-high-resolution capture of fragile historical artifacts.", icon: FileSearch },
      { title: "Metadata Structuring", description: "Organizing archives into searchable, institutional-grade databases.", icon: Database },
      { title: "Digital Curation", description: "Long-term storage and accessibility strategies for digital assets.", icon: ShieldCheck }
    ],
    capabilities: ["Glass Plate Negative Recovery", "Manuscript Digitization", "Multi-Spectral Imaging", "Archival Storage Solutions"]
  },
  "licensing-monetization": {
    title: "Licensing & Monetization",
    category: "Growth",
    icon: Cpu,
    description: "Commercial licensing strategy across media, publishing, AI training, and archival use cases.",
    longDescription: "Unlocking the economic potential of historical and creative assets through innovative licensing frameworks and strategic partnerships.",
    pillars: [
      { title: "Commercial Strategy", description: "Identifying high-value licensing opportunities in emerging markets.", icon: TrendingUp },
      { title: "AI Training Licensing", description: "Structured data licensing for modern generative AI development.", icon: Cpu },
      { title: "Brand Partnerships", description: "Aligning historical assets with contemporary institutional brands.", icon: Globe }
    ],
    capabilities: ["Sync Licensing", "Brand Heritage Marketing", "Derivative Work Strategy", "Royalty Stream Optimization"]
  },
  "rights-intelligence-reports": {
    title: "Rights Intelligence Reports",
    category: "Intelligence",
    icon: BarChart3,
    description: "Detailed analysis of ownership status, licensing potential, and commercial viability of intellectual assets.",
    longDescription: "High-level strategic intelligence for investors and estate managers, providing deep visibility into portfolio health and valuation.",
    pillars: [
      { title: "Valuation Analysis", description: "Rigorous financial assessment of rights portfolios and catalogs.", icon: Coins },
      { title: "Market Sentiment", description: "Analyzing the cultural and commercial relevance of assets.", icon: BarChart3 },
      { title: "Risk Assessment", description: "Identifying legal and commercial threats to asset continuity.", icon: ShieldCheck }
    ],
    capabilities: ["Due Diligence Dossiers", "Catalog Performance Reports", "Global Rights Mapping", "Trend Analysis Intelligence"]
  }
};

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES_DATA[slug];

  if (!service) {
    return notFound();
  }

  const Icon = service.icon;

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-16 pb-24 border-b border-foreground/5">
        <div className="container mx-auto px-6">
          <Link href="/#services" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40 hover:text-primary transition-colors mb-12">
            <ArrowLeft className="w-3 h-3" /> Back to Intelligence Index
          </Link>
          
          <div className="journal-grid items-start">
            <div className="col-span-12 lg:col-span-7">
              <div className="flex items-center gap-3 text-primary font-bold uppercase tracking-[0.3em] text-xs mb-6">
                <Icon className="w-5 h-5" />
                {service.category} Division
              </div>
              <h1 className="font-headline text-6xl md:text-8xl leading-[0.9] tracking-tighter mb-8 animate-staccato">
                {service.title}.
              </h1>
              <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed font-light animate-staccato delay-1">
                {service.description}
              </p>
            </div>
            
            <div className="col-span-12 lg:col-span-4 lg:col-start-9 mt-12 lg:mt-0">
              <div className="p-8 border-2 border-foreground bg-foreground text-background shadow-2xl animate-staccato delay-2">
                <div className="flex items-center justify-between mb-8 border-b border-background/20 pb-4">
                  <span className="text-[10px] font-mono opacity-50">DOCUMENT: MAR-{slug.toUpperCase()}</span>
                  <div className="w-3 h-3 bg-secondary" />
                </div>
                <h3 className="font-headline text-2xl mb-4 uppercase">Institutional Access</h3>
                <p className="text-sm opacity-70 mb-8 leading-relaxed">
                  Request a specialized briefing or initiate a portfolio review with our stewardship directors.
                </p>
                <Button className="w-full h-12 bg-background text-foreground hover:bg-background/90 rounded-none uppercase tracking-widest text-[10px] font-bold">
                  Request Institutional Briefing
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F8F4ED]">
        <div className="container mx-auto px-6">
          <div className="journal-grid">
            <div className="col-span-12 lg:col-span-6">
              <h2 className="text-[10px] uppercase font-bold tracking-[0.4em] text-foreground/30 mb-8 block">Operational Mandate</h2>
              <div className="prose prose-lg">
                <p className="font-headline text-3xl leading-snug text-foreground/90 mb-8">
                  "The preservation of rights is the preservation of legacy."
                </p>
                <div className="space-y-6 text-foreground/70 leading-relaxed text-lg">
                  <p>{service.longDescription}</p>
                </div>
              </div>
            </div>
            
            <div className="col-span-12 lg:col-span-5 lg:col-start-8">
              <div className="border-t-2 border-foreground pt-8 mb-16">
                <h3 className="text-xs font-bold uppercase tracking-widest mb-8">Core Service Pillars</h3>
                <div className="space-y-12">
                  {service.pillars.map((pillar: any, i: number) => (
                    <div key={i} className="flex gap-6">
                      <div className="shrink-0 w-12 h-12 bg-foreground text-background flex items-center justify-center">
                        <pillar.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-headline text-xl uppercase mb-2">{pillar.title}</h4>
                        <p className="text-sm text-foreground/60 leading-relaxed">{pillar.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-y border-foreground/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary mb-4 block">Operational Scope</span>
            <h2 className="font-headline text-4xl tracking-tighter mb-4">Functional Capabilities Matrix</h2>
            <p className="text-foreground/50">Comprehensive services delivered through our proprietary Marwane Intelligence engine.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.capabilities.map((cap: string, i: number) => (
              <div key={i} className="flex items-start gap-4 p-6 border border-foreground/5 bg-white shadow-sm hover:border-primary/20 transition-colors group">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="font-medium text-foreground/80">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
