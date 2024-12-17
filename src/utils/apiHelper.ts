import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/users', // replace with your base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchDataFromApi = async (endpoint: string) => {
  const response = await apiClient.get(endpoint);
  return response.data;
};
