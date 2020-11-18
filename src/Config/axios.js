import axios from 'axios';

// crear una nueva instancia de Axios
const instance = axios.create({
    baseURL:"https://jsonfy.com"
});

export default instance;