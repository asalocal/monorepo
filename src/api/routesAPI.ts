import axios from 'axios';

const routesAPI = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BYT_URL}/api`,
});

export default routesAPI;
