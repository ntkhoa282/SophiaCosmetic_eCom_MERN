import axios from 'axios';

const httpRequest = axios.create({
    baseURL: 'http://localhost:8000',
});

export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
};

export default httpRequest;
