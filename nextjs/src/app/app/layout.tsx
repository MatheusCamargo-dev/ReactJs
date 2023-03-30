import AuthProvider from "@/components/AuthProvider";
import { ReactNode } from "react";
interface AppLayoutProps{
    children: ReactNode
}
  
export default function AppLayout ({ children }: AppLayoutProps) {
    return(
        <div className="rounded flex flex-col h-screen bg-gray-100">
            <AuthProvider child={children} />
        </div>
    )
}   
