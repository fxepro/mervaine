
'use server';
/**
 * @fileOverview An AI agent for classifying user assets and suggesting the appropriate Marwane service path.
 *
 * - aiAssetClassification - A function that handles the asset classification process.
 * - AiAssetClassificationInput - The input type for the aiAssetClassification function.
 * - AiAssetClassificationOutput - The return type for the aiAssetClassification function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

// Define the input schema
const AiAssetClassificationInputSchema = z.object({
  assetDescription: z.string().describe('A natural language description of the user\'s asset.'),
});
export type AiAssetClassificationInput = z.infer<typeof AiAssetClassificationInputSchema>;

// Define the output schema
const AiAssetClassificationOutputSchema = z.object({
  division: z.string().describe('The primary Marwane service stream relevant to the asset.'),
  servicePath: z.string().describe('A suggested service path or next step within Marwane services, tailored to the asset description.'),
  reasoning: z.string().describe('A brief explanation of why this service path was chosen.'),
});
export type AiAssetClassificationOutput = z.infer<typeof AiAssetClassificationOutputSchema>;

export async function aiAssetClassification(input: AiAssetClassificationInput): Promise<AiAssetClassificationOutput> {
  return aiAssetClassificationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'assetClassificationPrompt',
  input: { schema: AiAssetClassificationInputSchema },
  output: { schema: AiAssetClassificationOutputSchema },
  prompt: `You are an expert asset classifier for Marwane Holdings, a company dedicated to preservation and stewardship. Your task is to analyze a user's asset description and determine the most relevant Marwane service and an appropriate service path.

Here are the core Marwane services:
1. Rights Administration: Management of intellectual property portfolios, licensing, royalty collection.
2. Royalty Recovery: Identification and recovery of unpaid or misallocated royalties globally.
3. Copyright Research: Deep legal and archival investigation into ownership and chain-of-title.
4. Estate Representation: Support for heirs, families, and institutions managing creative legacies.
5. Archive Digitization: Conversion of physical and analog collections into structured digital systems.
6. Licensing & Monetization: Commercial licensing strategy across media, publishing, and AI training.
7. Rights Intelligence Reports: Analysis of ownership status and licensing potential.

Analyze the following asset description and provide your classification as a JSON object.

Asset Description: {{{assetDescription}}}

When choosing the 'division', select one of the 7 services listed above. When choosing 'servicePath', be specific and action-oriented.
`,
});

const aiAssetClassificationFlow = ai.defineFlow(
  {
    name: 'aiAssetClassificationFlow',
    inputSchema: AiAssetClassificationInputSchema,
    outputSchema: AiAssetClassificationOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
      throw new Error('Failed to classify asset: LLM output was null or undefined.');
    }
    return output;
  }
);
