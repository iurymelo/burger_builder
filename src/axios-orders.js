import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-udemy.firebaseio.com/'
});

export default instance;