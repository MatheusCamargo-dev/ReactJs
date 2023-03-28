import axios from 'axios';
import { parseCookies } from 'nookies';


export const api = axios.create({
    baseURL: 'http://localhost'
})




export async function setupAPIClient(ctx = undefined) {
  const { token } = await parseCookies(ctx);
  console.log(token)
  if(token){
      api.defaults.headers['Authorization'] = `Bearer ${token}`;
  }

  return api;
}
