import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://shop-308e8.firebaseio.com/'
});

export default instance;