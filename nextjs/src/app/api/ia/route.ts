import { NextRequest, NextResponse } from "next/server";
import userController from "@/database/controllers/UserController";
import  jwt  from "jsonwebtoken";
import tokenController from "@/database/controllers/TokenController";

export async function POST(request: Request) {
    try{
        const res = await request.json();
        const user = await userController.createUser(res);
        return NextResponse.json(user);
    }
    catch(e){
        console.error(e);
        return NextResponse.error();
    }
}
export async function GET(request: NextRequest) {
    try{ 
        const token = request.headers.get('authorization')?.split(" ")[1]
        if(!token) return { status: 0, message: "Token invalid"};

        const res =  await tokenController.validToken(token);
        if(res.status == 1){
            const user = await userController.showUser();
            return NextResponse.json(user);
            
        }
        return NextResponse.json(res);
    }
    catch(e){
        console.error(e);
        return NextResponse.error();
    }
}