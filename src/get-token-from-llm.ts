// import axios from 'axios';

// const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
// const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';

// export async function getTokenFromLLM(contents: string): Promise<string> {
//     try {
//         const response = await axios.post(
//             `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
//             {
//                 contents: [
//                     {
//                         parts: [
//                             {
//                                 text: `You are an AI agent that needs to tell me if this tweet is about buying a token. Return me either the address of the Solana token, or return null if you can't find a Solana token address in this tweet. Only return if it says it is a bull post. The token address will be very visible in the tweet. Tweet: ${contents}`
//                             }
//                         ]
//                     }
//                 ]
//             },
//             {
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             }
//         );

//         // Extracting the response and returning the result
//         const result = response.data.generatedContent || "null";
//         return result;
//     } catch (error) {
//         console.error('Error interacting with Gemini:', error);
//         return "null";
//     }
// }



import OpenAI from "openai";
const openai = new OpenAI({
    apiKey: process.env.OPENAI_KEY
});

export async function getTokenFromLLM(contents: string): Promise<string> {
    const completion = await openai.chat.completions.create({
        model: "gpt-4o",
        store: true,
        messages: [
            {"role": "system", "content": "You are an AI agent that needs to tell me if this tweet is about buying a token. Return me either the address of the solana token, or return me null if you cant find a solana token address in this tweet. Only return if it says it is a bull post. The token address will be very visible in the tweet."},
            {"role": "user", "content": contents}
        ]
    });

    return completion.choices[0].message.content ?? "null";
}