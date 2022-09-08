import axios from 'axios'
const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_HOST || 'http://localhost:5000'
});

axiosInstance.interceptors.request.use((value) => {
  const isPrivate=value.url.split('/')[0]=='private'?true:false;
 if(isPrivate){
     value.headers = {
         Accept: "application/json",
         "Content-Type": "application/json",
         Authorization: `Bearer ${localStorage.getItem("access_token")}`
     }
 }
    return value
})

export default axiosInstance;

