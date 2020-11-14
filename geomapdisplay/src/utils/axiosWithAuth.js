import axios from 'axios';

const API_BASE_URL = 'https://development.eazyml.com/ez_api'

export const axiosWithAuth = () => {
  const token=localStorage.getItem('token')
  return axios.create({
    baseURL: API_BASE_URL,
    headers: {
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    },
  });
};
