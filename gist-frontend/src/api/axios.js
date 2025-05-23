import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true,
});

export const getAllGists = async () => {
  const response = await API.get('/gists');
  return response.data;
};

export const createGist = async (gistData) => {
  const response = await axios.post('/gists', gistData);
  return response.data;
};


export default API;





