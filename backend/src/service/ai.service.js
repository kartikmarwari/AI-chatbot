const { GoogleGenAI } =require ("@google/genai");

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI(  {apiKey: process.env.GOOGLE_API_KEY,
});


async function generateResponse(chatHistory) {
    const response=await ai.models.generateContent({
   model:"gemini-2.5-flash",
   contents:chatHistory,

   config:{
    systemInstruction:"you give answer in maximun 5 lines "
   }
    });
    return response.text;
}
module.exports=generateResponse;