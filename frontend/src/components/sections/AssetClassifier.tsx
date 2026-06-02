
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { aiAssetClassification, type AiAssetClassificationOutput } from "@/ai/flows/ai-asset-classification-flow";
import { Loader2, Sparkles, CheckCircle2, ChevronRight } from "lucide-react";

export function AssetClassifier() {
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AiAssetClassificationOutput | null>(null);

  const handleClassify = async () => {
    if (!description) return;
    setLoading(true);
    try {
      const data = await aiAssetClassification({ assetDescription: description });
      setResult(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="classifier" className="py-24 border-y border-foreground/5 bg-[#F8F4ED]">
      <div className="container mx-auto px-6">
        <div className="journal-grid items-start">
          <div className="col-span-12 lg:col-span-5 mb-12">
            <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-[0.2em] text-xs mb-4">
              <Sparkles className="w-4 h-4" />
              Intelligence Engine
            </div>
            <h2 className="font-headline text-4xl md:text-6xl tracking-tighter mb-6 leading-tight">
              Route Your <br />
              <span className="italic">Submission.</span>
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-8">
              Describe your asset—whether it be a family estate, a music catalog, or a historical archive. 
              Our AI classification system will determine the optimal Mervaine service path and provide immediate strategic routing.
            </p>
            <div className="p-8 border-2 border-foreground/5 bg-background shadow-inner">
              <span className="text-xs uppercase font-bold tracking-widest block mb-4">Asset Description Registry</span>
              <Textarea 
                placeholder="Ex: A collection of 19th-century naval maps and related correspondence from the East India Company..."
                className="min-h-[150px] bg-transparent border-foreground/10 focus-visible:ring-primary mb-4 text-base"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <Button 
                onClick={handleClassify} 
                disabled={loading || !description}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-widest text-xs h-12"
              >
                {loading ? <Loader2 className="animate-spin mr-2 w-4 h-4" /> : "Run Classification Engine"}
              </Button>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            {result ? (
              <div className="animate-staccato">
                <Card className="border-2 border-primary overflow-hidden shadow-2xl">
                  <div className="bg-primary p-6 text-primary-foreground flex justify-between items-center">
                    <span className="text-xs uppercase font-bold tracking-widest">Classification Report</span>
                    <span className="text-[10px] font-mono opacity-60">REF: MER-{Math.random().toString(36).substr(2, 6).toUpperCase()}</span>
                  </div>
                  <CardContent className="p-10 space-y-8">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 mb-2 block">Primary Service Stream</span>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-6 h-6 text-primary" />
                        <h3 className="font-headline text-3xl uppercase">{result.division}</h3>
                      </div>
                    </div>

                    <div className="p-6 bg-foreground/5 border-l-4 border-secondary">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 mb-2 block">Service Path Recommendation</span>
                      <p className="font-headline text-xl leading-snug text-foreground/90">{result.servicePath}</p>
                    </div>

                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 mb-2 block">Strategic Reasoning</span>
                      <p className="text-sm leading-relaxed text-foreground/70 italic">"{result.reasoning}"</p>
                    </div>

                    <Button variant="link" className="p-0 text-primary uppercase font-bold text-xs tracking-widest flex items-center gap-2" asChild>
                      <Link href="/request-dossier">Initiate Formal Onboarding <ChevronRight className="w-4 h-4" /></Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <div className="h-full border-2 border-dashed border-foreground/10 rounded-lg flex flex-col items-center justify-center p-12 text-center opacity-40">
                <div className="w-16 h-16 border-2 border-foreground rounded-full flex items-center justify-center mb-6">
                   <div className="w-8 h-8 border-2 border-foreground" />
                </div>
                <h3 className="font-headline text-xl mb-2">Classification Pending</h3>
                <p className="text-sm max-w-xs">Awaiting descriptive input to generate structural routing for your inquiry.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
