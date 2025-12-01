import { GoogleGenAI } from "@google/genai";
import { RESUME_CONTEXT } from '../constants';

let aiClient: GoogleGenAI | null = null;

// Initialize the client securely
const getClient = (): GoogleGenAI => {
  if (!aiClient) {
    if (!process.env.API_KEY) {
      console.warn("API Key not found in environment variables.");
    }
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }
  return aiClient;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const ai = getClient();
    // Using gemini-2.5-flash for speed and efficiency in a chat context
    const model = 'gemini-2.5-flash'; 
    
    const response = await ai.models.generateContent({
      model: model,
      contents: message,
      config: {
        systemInstruction: RESUME_CONTEXT,
        thinkingConfig: { thinkingBudget: 0 }, // Disable thinking for faster chat response
        temperature: 0.7, // Friendly and creative but grounded
      }
    });

    return response.text || "抱歉，我大脑短路了，能再说一遍吗？";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "哎呀！我的AI大脑目前掉线了。请稍后再试。";
  }
};