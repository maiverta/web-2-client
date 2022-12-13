import api from '../config/api.js';

export const getProducts = async()=> {
    const {data} = await api.get('/products');
    return data
}
