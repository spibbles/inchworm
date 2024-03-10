import { NextResponse } from "next/server";

export async function POST(REQUEST){
    return NextResponse.json({
        name: "It works!!"
    });
}