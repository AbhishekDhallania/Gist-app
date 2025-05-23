// import axios from 'axios';

// const api = axios.create({
//   baseURL: 'http://localhost:3000/api', // adjust if your backend runs on a different port
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// export default api;

import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true, // important for sessions/cookies
});

export default API;
