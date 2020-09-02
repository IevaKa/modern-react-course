import axios from 'axios';
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: CLIENT_ID,
      }
});