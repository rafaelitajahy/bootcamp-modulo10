import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3337', //conexão USB utilizar IP
});

export default api;
