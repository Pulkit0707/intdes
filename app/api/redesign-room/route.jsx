import { NextResponse } from "next/server";

export async function POST(req){
    const {imageUrl,roomType,designType}=await req.json();
    
    return NextResponse.json({result:'Hello'})
}