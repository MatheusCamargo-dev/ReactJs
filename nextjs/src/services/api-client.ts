import { parseCookies } from "nookies";

export async function apiClient(url: string, method: string = 'GET', data?: any, ctx = undefined) {
  const { token } = await parseCookies(ctx);

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}` as const;
  }
  const options: RequestInit = {
    method: method,
    headers: headers,
    mode: 'cors',
    body: JSON.stringify({
      date: data
    })
  };

  return fetch(url, options);
}
