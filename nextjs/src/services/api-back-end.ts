import { cookies } from "next/headers";

export default async function api(url: string){
  const cookieStore = cookies();
  const token = cookieStore.get('token')
  const headers = new Headers({
    'Authorization': `Bearer ${token?.value}`
  });
  const response = await fetch('http://localhost:3000/api/user/', {
    headers
  });

  const data = await response.json()
  return data;
}