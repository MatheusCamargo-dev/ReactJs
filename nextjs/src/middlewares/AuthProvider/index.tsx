"use client"
import { ReactNode, useEffect, useState } from "react";
import {  useRouter } from 'next/navigation';
import Header from "../../components/Header";
import AppLoading from "../../components/AppLoading";
import { apiClient } from "@/services/api-client";

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
          const data = await apiClient('http://localhost:3000/api/token', 'POST');
          const auth = await data.json();
          if (auth.status == 0) router.push('/');
          setAuthStatus(auth.status);
     }
     token();
  }, [authStatus]);

  return(
    <>
      { authStatus == 1 && <Header/>}
      { authStatus == 1 && child}
      { authStatus == 0 && <AppLoading />}
    </>
  )
}
