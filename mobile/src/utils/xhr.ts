import axios from 'axios';

const xhr = axios.create({
    baseURL: 'http://192.168.0.40:3333'
});

export default xhr;
