import axios from './axiosInstance'

export const apiGet = (url, others) => {
    try {
        return axios.get(url, others)
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const apiPost = (url, body, others) => {
    try {
        return axios.post(url, body, others);
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const apiPut = (url, body, others) => {
    try {
        return axios.put(url, body, others);
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const apiDelete = (url, others) => {
    try {
        return axios.delete(url, others)
    } catch (error) {
        console.log(error);
        return null;
    }
}


