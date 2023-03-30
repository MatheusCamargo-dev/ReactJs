import { redirect } from "next/navigation";

export default async function AuthProvider(){

    const auth = await fetch('http:localhost:3000/api/token',{
        method: 'POST'});

    const r = await auth.json()
    
    return r;
}