import axios from 'axios';

const routesAPI = axios.create({
  baseURL: `http://localhost:3000/api`,
});

export default routesAPI;
