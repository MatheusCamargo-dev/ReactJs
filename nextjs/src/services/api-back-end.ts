import { cookies } from "next/headers";

export default async function api(url: string, post = false){
  const cookieStore = cookies();
  const token = cookieStore.get('token')
  const headers = new Headers({
    'Content-Type': 'application/json',
    'authorization': `Bearer ${token?.value}`,
  });
  const response = await fetch(url, {
    method: (post ? 'POST' : 'GET'),
    cache: 'no-store',
    mode: 'cors',
    headers
  });

  const data = await response.json()
  return data;
}