import axios from 'axios';

const BASE_URL = 'https://bigheadstore.herokuapp.com';

function createConfig(token) {
  return {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }
}

async function createUser(user) {
  await axios.post(`${BASE_URL}/auth/sign-up`, user);
}

async function login(data) {
  const token = await axios.post(`${BASE_URL}/auth/sign-in`, data);
  return token;
}

async function validateToken(token) {
  const validation = await axios.get(`${BASE_URL}/users`,
      createConfig(token) );
  return validation;
}

async function checkout(token, purchase) {
  const createPurchase = await axios.post(`${BASE_URL}/users/purchase`, purchase, createConfig(token))
  return createPurchase;
}

const api = {
  createUser,
  login,
  validateToken,
  checkout
}

export default api;