import axios from 'axios';

// Caso eu tente colocar no heroku lembrar de mudar a baseURL
const api = axios.create({
    baseURL: 'http://localhost:8787'
});

export default api;