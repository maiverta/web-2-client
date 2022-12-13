import api from '../config/api.js';

export class userService{
     static getUser = async()=> {
        const {data} = await api.get('/users');
        return data
    }
     static addUser = async(userBody)=> {
        console.log('userBody')
        console.log(userBody)
        const {data} = await api.post('/users', userBody);
        return data
    }
}
