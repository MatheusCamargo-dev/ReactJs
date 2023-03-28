import tokenController from "@/database/controllers/TokenController";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try{
        const res = await request.json();
        const { email, password} = res.date
        const auth = await tokenController.createToken({email, password});
        return NextResponse.json(auth);
    }
    catch(e){
        console.error(e);
        return NextResponse.error();
    }
}