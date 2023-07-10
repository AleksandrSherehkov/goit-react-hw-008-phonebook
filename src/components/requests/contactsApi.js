import axios from 'axios';

const usersApi = axios.create({
  baseURL: 'https://63c7e1d3075b3f3a91d50f37.mockapi.io',
});

export const fetchUsers = async () => {
  const { data } = await usersApi.get('/users');
  console.log(data);
};
