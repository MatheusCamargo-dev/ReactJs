import axios from 'axios';
import { cookies } from 'next/headers';


export const api = axios.create({
    baseURL: 'http://localhost'
})


export function setupAPIServer(ctx = undefined) {
    const cookieStore = cookies();
    const token = cookieStore.get('token')

    if (token) {
        api.defaults.headers['Authorization'] = `Bearer ${token.value}`;
    }

  return api;
}
