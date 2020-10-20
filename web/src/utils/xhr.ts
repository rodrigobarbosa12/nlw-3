import axios from 'axios';

const xhr = axios.create({
    baseURL: 'http://localhost:3333'
});

export default xhr;
