import { NextRequest, NextResponse } from "next/server";
import userController from "@/database/controllers/UserController";
import  jwt  from "jsonwebtoken";
import tokenController from "@/database/controllers/TokenController";
import chatGPTController from "@/database/controllers/chatGPTController";


export async function POST(request: NextRequest) {
    try{ 
        const token = request.cookies.get('token');

        if(!token) return { status: 0, message: "Token invalid"};
        const res =  await tokenController.validToken(token?.value);
        
        if(res.status == 1){
            const form = await request.json();
            const { text } = form.date;
            const output = await chatGPTController.submit(text);
            if(output.error !== undefined) return NextResponse.json(output.error.message);
            const r = output.choices[0]?.text;
            return NextResponse.json(r);
        }
        return NextResponse.json(res);
    }
    catch(e){
        console.error(e);
        return NextResponse.error();
    }
}