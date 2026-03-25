import axios from 'axios';

const client = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL || 'http://localhost:5000/api',
  timeout: 10000
});

export default client;
