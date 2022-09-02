import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_HOST || 'http://localhost:5000',
});

export default axiosInstance;

