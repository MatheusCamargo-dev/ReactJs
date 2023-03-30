import { cookies } from "next/headers";

export default async function api(url: string, post?: boolean){
  const cookieStore = cookies();
  const token = cookieStore.get('token')
  const headers = new Headers({
    'Authorization': `Bearer ${token?.value}`,
    
  });
  
  const response = await fetch(url, {
    method: (post ? 'POST' : 'GET'),
    cache: 'no-store',
    headers
  });
  const data = await response.json()
  return data;
}