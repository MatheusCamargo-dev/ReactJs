"use client"

import Header from '@/components/Header'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { useForm } from 'react-hook-form';
import { Provider, useDispatch } from 'react-redux';
import { store } from '@/store/store';
import { singInRequest } from '@/services/auth';
import { useStoreSelector } from '@/hooks/useStoreSelector';
import {  useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type AuthState = {
  Auth: {
    isAuthenticated: boolean
  }
};


export default function Home() {

  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');
  const [loginText, setLoginText] = useState('Sign In');

  // const authSession = useStoreSelector((state: AuthState) => state.Auth);
  // const dispatch = useDispatch();
  

   async function handleSignIn(data: any){
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
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=green&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
              Sign in to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit(handleSignIn)}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  {...register('email')}
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 p-1.5 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  {...register('password')}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full rounded-b-md border-0 py-1.5 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Password"
                />
              </div>
              
            </div>
            {
              errorMessage && <div className=" d-flex p-1.5 rounded bg-red-500 text-white m-2.5 mt-10">
                                  <p>{errorMessage}</p>
                              </div>
            }
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-white">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-green-600 py-2 px-3 text-sm font-semibold text-slate-700 hover:bg-green-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-slate-700 group-hover:text-white" aria-hidden="true" />
                </span>
                {loginText}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
    
  )
}