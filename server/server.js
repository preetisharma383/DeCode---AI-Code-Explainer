import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import ratelimit from "express-rate-limit";
import helmet from "helmet";
import OpenAi from "openai";
dotenv.config();
const app=express();

//security middleware
app.use(helmet());
app.use(cors({ origin: "*"}));


//rate limiter
const limiter=ratelimit({
    windowMs:15*60*1000,
    max:100,
    message:"To many requests from this IP ,please try again after some time"
});
app.use(limiter);
app.use(express.json({limit:"10mb"}));

//openai client
const client = new OpenAi({
    baseURL: 'https://api.studio.nebius.com/v1/',
    apiKey: process.env.API_KEY,
});


app.post("/api/explain-code",async (req,res)=>{
    try {
        
        const {code,language}=req.body;
        if(!code){
            return res.send(400).json({error:"Code is required"});
        }
    const messages = [
      {
        role: "user",
        content: `Please explain this ${
          language || ""
        } code in simple terms:\n\n\`\`\`${language || ""}\n${code}\n\`\`\``,
      },
    ];
    const response=await client.chat.completions.create({
         "model": "openai/gpt-oss-120b",
         messages,
         temperature:0.3,
         max_tokens:800,
    });
     const explanation = response?.choices[0]?.message?.content;
    if (!explanation) {
      return res.status(500).json({ error: "Failed to explain code" });
    }

    res.json({ explanation, language: language || "unknown" });

    } catch (err) {
        console.error("Code Explain API error:",err);
        res.status(500).json({error:"Server ",details:err.message});

    }
})
const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    
     console.log(`Enhanced API server listening on http://localhost:${PORT}`);
})
app.get('/', (req, res) => {
  res.send('🚀 DeCode API is running successfully!');
});
