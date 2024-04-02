import axios from "axios";
import Cookies from 'js-cookie';

const apiClient = axios.create({
 baseURL: 'http://localhost:3005',
 timeout: 10000
});

apiClient.interceptors.request.use((config) => {
 const accessToken = Cookies.get('token');

 if(accessToken){
  if(config.headers)  config.headers.Authorization = `Bearer ${accessToken}`
 }
 
 return config;
})

export default apiClient;