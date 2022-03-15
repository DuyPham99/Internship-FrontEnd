import axios from 'axios';
import queryString from 'query-string';
import { useDispatch, useSelector } from 'react-redux';
import { loginState } from '../features/accountSlice';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080/',
  headers: {
    'content-type': 'application/json'
  },
  paramsSerializer: params => queryString.stringify(params)
});

apiClient.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

apiClient.interceptors.response.use((response) => {
  const token = localStorage.getItem('token');

  // if (!token) {
  //   return null;
  // }

  if (response && response.data) {
    return response.data;
  }
  return response;
}, (error) => {
  // Handle errors
  throw error;
});
export default apiClient;
