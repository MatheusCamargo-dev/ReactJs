"use client"

import { singInRequest } from '@/services/auth';
import {  useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Login from '@/components/Login';
import Register from '@/components/Register';


export default function Home() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');
  const [loginText, setLoginText] = useState('Sign In');
  const [typeForm, setTypeForm] = useState('login');

   function changeForm() {
      if(typeForm == 'login'){
        setTypeForm('register')
      }else{
        setTypeForm('login')
      }
   }

   async function handleSignIn(data: any){
    setErrorMessage('');
      setLoginText('wait...')
      const auth = await singInRequest(data);
      if (auth.status == 0){
        setErrorMessage(auth.message);
        setLoginText('Sign In')
      };
      if (auth.status === 1){
        router.push('/app');
      }
  }
  return (
    <>
        <div className="flex min-h-full items-center justify-center h-screen py-12 px-4 sm:px-6 lg:px-8">
          { typeForm == 'login' && <Login changeForm={changeForm} errorMessage={errorMessage} handleSignIn={handleSignIn} loginText={loginText}/> }
          { typeForm == 'register' && <Register  changeForm={changeForm} />}
        </div>

    </>
    
  )
}
