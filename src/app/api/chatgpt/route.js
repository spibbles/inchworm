import { NextResponse } from "next/server";
import OpenAI from "openai";




export async function POST(REQUEST){

    console.log(process.env.OPENAI_API_KEY);

    const openai =  new OpenAI({
        apiKey: process.env.OPENAI_API_KEY
    })

    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role:"system",
                content: "You are a kind friend and assitant trying to help a person with ADHD and executive disfunction accomplish their goals and create a daily schedule. Respond to their tasks by providing them with a schedule and possible plan to acheiving their goals!"

            },
            {
                role: "user",
                content: "How do i become better at calculus?"
            }
        ],
        temperature: 0,
        max_tokens: 1024,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty:0,
    })

    return NextResponse.json(response);
}