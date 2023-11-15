import OpenAI from "openai";

const apiKey = process.env.OPEN_AI_KEY;

if (!apiKey) {
  throw Error("OPENAI_API_KEY is not set"); //use cleanenv or somithing like that maybe?
}

const openai = new OpenAI({ apiKey });

export default openai;
