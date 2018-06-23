import axios from 'axios'
const BASE_URL = process.env.MOCK ? 'http://localhost:9000/' : 'http://api.harlanluo.com/app/';
axios.defaults.baseURL = BASE_URL;

export default axios;



