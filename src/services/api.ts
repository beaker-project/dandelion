import axios from 'axios';

const api = axios.create({
  baseURL: 'http://worldtimeapi.org/api/',
});

export default api;
