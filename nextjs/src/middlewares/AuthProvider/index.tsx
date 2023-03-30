"use client"
import { ReactNode, useEffect, useState } from "react";
import {  useRouter } from 'next/navigation';
import {setupAPIClient} from "@/services/api-client";
import Header from "../../components/Header";
import AppLoading from "../../components/AppLoading";

type AuthenticatedComponentProps = {
  child: ReactNode;
  children?: ReactNode;
};

export default function AuthProvider(props: AuthenticatedComponentProps) {
  const router = useRouter();
  const { child } = props;
  const [authStatus, setAuthStatus ] = useState(0);
  useEffect(() =>{
     const token = async () => {
          const api = await setupAPIClient();
          const auth = await api('http://localhost:3000/api/token');
          if (auth.data.status == 0) router.push('/');
          setAuthStatus(auth.data.status);
     }
     token();
  }, []);

  return(
    <>
      { authStatus == 1 && <Header/>}
      { authStatus == 1 && child}
      { authStatus == 0 && <AppLoading />}
    </>
  )
}
