import { NextRequest, NextResponse } from "next/server";
import tokenController from "@/database/controllers/TokenController";


export async function POST(request: NextRequest) {
    try{ 
        console.log('post?????');
        const token = request.cookies.get('token');
        if(!token) return  NextResponse.json({status: 0, message: "Token invalid"});
        const res =  await tokenController.validToken(token?.value);
        console.log(res);
        return NextResponse.json(res);
    }
    catch(e){
        console.error(e);
        return NextResponse.json(e);
    }
}

export async function GET(request: NextRequest) {
    try{ 
        console.log('get?????');
        
        return NextResponse.json({erro: true});
    }
    catch(e){
        console.error(e);
        return NextResponse.json(e);
    }
}