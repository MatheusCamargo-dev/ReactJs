import { NextResponse } from "next/server";
import userController from "@/database/controllers/UserController";

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
export async function GET(request: Request) {
    try{
        const user = {message: 'this is user'};
        return NextResponse.json(user);
    }
    catch(e){
        console.error(e);
        return NextResponse.error();
    }
}