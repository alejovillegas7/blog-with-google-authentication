//el nombre del archivo es porque la api externa que usaremos para enviar solicitudes se llama
//jsonplaceholder

import axios from 'axios';

export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});