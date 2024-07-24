import { streamText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
import { env } from "$env/dynamic/private";

/**
 * Description placeholder
 *
 * @type {*}
 */
const groq = createOpenAI({
    apiKey: env.GROQ_API_KEY ?? "",
    baseURL: "https://api.groq.com/openai/v1",
  });

  /**
   * Description placeholder
   *
   * @type {({ request }: { request: any; }) => unknown}
   */
  export const POST=(async ({request})=>{
    const {prompt}=await request.json()
    const model = groq('llama3-8b-8192')
    const system="Eres un creador de contenido para redes sociales"
  
    const result=await streamText({
      model,
      system,
      prompt,
      maxTokens: 768,
      temperature: 0.2,
      topP: 0.8,
    })
  
    return result.toAIStreamResponse();
    
  })