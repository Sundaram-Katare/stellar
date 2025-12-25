import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function reviewCode(code: string, language: string) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash",
    generationConfig: {
    responseMimeType: "application/json",
  }, });

  const prompt = `
You are a senior software engineer.

Analyze the following ${language} code.

Return STRICT JSON in this format:

{
  "score": number (0-100),
  "bugs": ["bug description with line number"],
  "optimizations": ["one-line improvement"],
  "rewrittenCode": "full improved code"
}

Rules:
- No explanations
- Bugs must be one line each
- Optimizations must be one line each

Code:
${code}
`;

  const result = await model.generateContent(prompt);
  const text = result.response.text();

  return JSON.parse(text);
}
