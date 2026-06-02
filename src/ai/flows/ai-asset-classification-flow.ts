'use server';
/**
 * @fileOverview An AI agent for classifying user assets and suggesting the appropriate Mervaine division and service path.
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
  division: z.enum(['Mervaine Rights', 'Mervaine Archives', 'Mervaine Intelligence']).describe('The most relevant Mervaine division for the described asset.'),
  servicePath: z.string().describe('A suggested service path or next step within the identified division, tailored to the asset description.'),
  reasoning: z.string().describe('A brief explanation of why this division and service path were chosen.'),
});
export type AiAssetClassificationOutput = z.infer<typeof AiAssetClassificationOutputSchema>;

export async function aiAssetClassification(input: AiAssetClassificationInput): Promise<AiAssetClassificationOutput> {
  return aiAssetClassificationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'assetClassificationPrompt',
  input: { schema: AiAssetClassificationInputSchema },
  output: { schema: AiAssetClassificationOutputSchema },
  prompt: `You are an expert asset classifier for Mervaine Holdings, a company dedicated to preservation and stewardship. Your task is to analyze a user's asset description and determine the most relevant Mervaine division and an appropriate service path.

Here are the Mervaine divisions and their primary focuses:
- **Mervaine Rights**: Specializes in intellectual property, copyrights, trademarks, licensing opportunities, ownership verification, and royalty recovery. This division is for assets where the primary concern is ownership, usage rights, or commercialization.
- **Mervaine Archives**: Focuses on the preservation, digitization, and cataloging of physical or digital historical artifacts, documents, collections, and media. This division is for assets that require long-term care, digital accessibility, or historical documentation.
- **Mervaine Intelligence**: Provides access to a rights intelligence database for tracking ownership, status, and licensing opportunities. This division is for users seeking data-driven insights about existing rights or market analysis, rather than directly submitting an asset for management.

Analyze the following asset description and provide your classification as a JSON object, ensuring all fields are populated according to the output schema.

Asset Description: {{{assetDescription}}}

When choosing the 'servicePath', be specific and action-oriented.
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
