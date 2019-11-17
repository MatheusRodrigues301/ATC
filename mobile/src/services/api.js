import axios from 'axios';

//colocar na base url o seu ip da maquina
const api = axios.create({
    baseUrl: 'http://192.168.1.44:3333'
})

export default api;