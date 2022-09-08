import axios from './axiosInstance'

export const apiGet =async (url, others) => {
    try {
    const res=await axios.get(url, others);
    return res.data;
    } catch (error) {
        return error;
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

export const apiPatch = (url, body, others) => {
    try {
        return axios.patch(url, body, others);
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


