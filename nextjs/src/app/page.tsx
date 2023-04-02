"use client"

import { signInRequest, signUpRequest } from '@/services/auth';
import {  useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Login from '@/components/Login';
import Register from '@/components/Register';
import { apiClient } from '@/services/api-client';
import { useSignInUp } from '@/hooks/useSignSignUp';


export default function Home() {
  const router = useRouter();

  const {
    typeForm,
    email,
    isLoading,
    changeForm,
    errorMessage,
    handleSignIn,
    handleSignUp,
    loginText
  } = useSignInUp();

  useEffect(() => {
    const token = async () => {
      const data = await apiClient('http://localhost:3000/api/token', 'POST');
      const auth = await data.json();
      if (auth.status == 1) router.push('/app');
    }
    token();
  }, [])

  return (
    <>
        <div className="flex min-h-full items-center justify-center h-screen py-12 px-4 sm:px-6 lg:px-8">
          { typeForm == 'login' && <Login email={email} isLoading={isLoading} changeForm={changeForm} errorMessage={errorMessage} handleSignIn={handleSignIn} loginText={loginText}/> }
          { typeForm == 'register' && <Register errorMessage={errorMessage} isLoading={isLoading} changeForm={changeForm} handleSignUp={handleSignUp} />}
        </div>

    </>

  )
}
