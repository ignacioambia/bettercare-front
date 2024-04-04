import axios from "axios";
import Cookies from 'js-cookie';

const apiClient = axios.create({
 baseURL: process.env.NEXT_PUBLIC_BASE_URL,
 timeout: 10000
});

apiClient.interceptors.request.use((config: any) => {
 const accessToken = Cookies.get('token');

 if(accessToken){
  if(config.headers)  config.headers.Authorization = `Bearer ${accessToken}`
 }
 
 return config;
})

export default apiClient;