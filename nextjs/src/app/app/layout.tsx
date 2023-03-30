import AuthProvider from "@/components/AuthProvider";
import Header from "@/components/Header";
import { ReactNode } from "react";
interface AppLayoutProps{
    children: ReactNode
}
  
const AppLayout = ({ children }: AppLayoutProps) => {
    return(
        <div className="rounded flex flex-col h-screen bg-gray-100">
            <Header></Header>
            {children}
        </div>
    )
}   

export default AuthProvider(AppLayout)