import { cookies } from "next/headers";

export default async function apiServer(url: string, method: string = 'GET', data?: any){
  const cookieStore = cookies();
  const token = cookieStore.get('token')

  const headers = new Headers({
    'Content-Type': 'application/json',
    'authorization': `Bearer ${token?.value}`,
  });
  
  const options: RequestInit = {
    method: method,
    cache: 'no-store',
    mode: 'cors',
    headers
  };

  return fetch(url, options);
}