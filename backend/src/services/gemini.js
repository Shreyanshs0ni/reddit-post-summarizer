import { GoogleGenAI } from '@google/genai';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function summarizeWithGemini(prompt, retries = 3) {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY is missing');
  }

  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        {
          role: 'user',
          parts: [{ text: prompt }],
        },
      ],
    });

    return response.text;
  } catch (err) {
    // Retry ONLY for overloads
    if (err.status === 503 && retries > 0) {
      console.warn(`Gemini overloaded. Retrying (${retries})...`);
      await sleep(1000 * (4 - retries)); // backoff: 1s, 2s, 3s
      return summarizeWithGemini(prompt, retries - 1);
    }

    throw err;
  }
}
