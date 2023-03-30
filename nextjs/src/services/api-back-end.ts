import { cookies } from "next/headers";

export default async function api(url: string, post?: boolean){
  const cookieStore = cookies();
  const token = cookieStore.get('token')
  let headers;
  console.log('my token');
  console.log(token)
  if(post){
    headers = new Headers({
      'method': 'POST',
    });
  }else{
    headers = new Headers({
      'Authorization': `Bearer ${token?.value}`
    });
  }
  const response = await fetch(url, {
    headers
  });
  console.log(response);
  const data = await response.json()
  return response;
}