import {GoogleGenAI} from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

export async function summarizeWithGemini(prompt) {
    const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
            {
                role: "user",
                parts: [{text: prompt}]
            }
        ]
    });

    return response.text;
}
