import Header from "@/components/Header";
import { ReactNode } from "react";
interface AppLayoutProps{
    children: ReactNode
}
export default function AppLayout({children}:AppLayoutProps){
    return(
        <div className="rounded flex flex-col">
            <Header></Header>
            {children}
        </div>
    )
}   