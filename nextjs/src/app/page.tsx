"use client"

import { signInRequest, signUpRequest } from '@/services/auth';
import {  useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Login from '@/components/Login';
import Register from '@/components/Register';


export default function Home() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');
  const [loginText, setLoginText] = useState('Sign In');
  const [typeForm, setTypeForm] = useState('login');
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  function changeForm() {
    setIsLoading(false);
    setErrorMessage('');
    if(typeForm == 'login'){
      setTypeForm('register')
    }else{
      setTypeForm('login')
    }
  }
  function passwordIsValid(password: string, confirm_password: string){
    if(!(password === confirm_password)) {
      setErrorMessage('different passwords!')
      return false;
    }

    if(password.length < 6){
      setErrorMessage('password must contain at least 6 digits')
      return false;
    }

    return true;
  }

  async function handleSignIn(data: any){
      setIsLoading(true);
      setErrorMessage('');
      setLoginText('wait...')
      const user = await signInRequest(data);
      if (user.status == 0){
        setErrorMessage(user.message);
        setLoginText('Sign In')
        setIsLoading(false);
      };
      if (user.status === 1){
        router.push('/app');
      }
  }
  
  async function handleSignUp(data: any) {
    setIsLoading(true);
    const { password, confirm_password} = data;
    
    if(!passwordIsValid(password, confirm_password)) {
      setIsLoading(false);
      return;
    };

    const user = await signUpRequest(data);
    setIsLoading(false);
    if (user.status == 0){
      setErrorMessage(user.message);
    };
    
    if (user.status === 1){
      setErrorMessage('');
      setEmail(user.email);
      setTypeForm('login');
      router.push('/');
    }
  }

  return (
    <>
        <div className="flex min-h-full items-center justify-center h-screen py-12 px-4 sm:px-6 lg:px-8">
          { typeForm == 'login' && <Login email={email} isLoading={isLoading} changeForm={changeForm} errorMessage={errorMessage} handleSignIn={handleSignIn} loginText={loginText}/> }
          { typeForm == 'register' && <Register errorMessage={errorMessage} isLoading={isLoading} changeForm={changeForm} handleSignUp={handleSignUp} />}
        </div>

    </>
    
  )
}
