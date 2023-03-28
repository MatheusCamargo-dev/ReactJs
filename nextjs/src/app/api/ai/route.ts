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
            console.log(text);
            console.log('------post--------')
            const output = await chatGPTController.submit(text);
            return NextResponse.json(output);
        }
        return NextResponse.json(res);
    }
    catch(e){
        console.error(e);
        return NextResponse.error();
    }
}