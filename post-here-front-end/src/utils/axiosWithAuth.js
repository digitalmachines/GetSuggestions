import axios from 'axios';

export const axiosWithAuth = () => {
  
  const token = localStorage.getItem('token');
  return axios.create({
    headers: {
      Authorization: token
    },
    baseURL: 'https://post-here-subreddit.herokuapp.com/api/auth'
  });
};