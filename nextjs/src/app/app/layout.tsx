import Header from "@/components/Header";
import { ReactNode } from "react";
interface AppLayoutProps{
    children: ReactNode
}
export default function AppLayout({children}:AppLayoutProps){
    return(
        <div>
            <Header></Header>
            {children}
        </div>
    )
}   