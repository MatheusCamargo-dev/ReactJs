import { NextRequest, NextResponse } from "next/server";
import tokenController from "@/database/controllers/TokenController";


export async function POST(request: NextRequest) {
    try{ 
        const token = request.cookies.get('token');
        if(token == undefined) return  NextResponse.json({status: 0, message: "Token invalid"});
        const res =  await tokenController.validToken(token?.value);
        return NextResponse.json(res);
    }
    catch(e){
        console.error(e);
        return NextResponse.json(e);
    }
}

export async function DELETE(request: NextRequest) {
    try{
        console.log('delete route')
        let res;
        const response = NextResponse.next()
        console.log(response.cookies.delete('token'));
        if(request.cookies.delete('token')){
            res = {status: 1, message: 'log out with success'};
        }else{
            res = {status: 0, message: `token doesn't exists`};
        }
        return NextResponse.json(res);
    }
    catch(e){
        console.error(e);
        return NextResponse.json(e);
    }
}