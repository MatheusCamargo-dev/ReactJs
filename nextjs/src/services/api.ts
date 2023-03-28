import axios from 'axios';
import { parseCookies } from 'nookies';
import { cookies } from 'next/headers';

const cookieStore = cookies();
const token = cookieStore.get('token')
export const api = axios.create({
    baseURL: 'http://localhost'
})

if(token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
}