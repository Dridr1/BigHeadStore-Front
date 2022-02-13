import axios from 'axios';

// const BASE_URL = 'https://bigheadstore.herokuapp.com';
const BASE_URL = 'http://localhost:5000';

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

async function getProduct(id) {
  const item = await axios.get(`${BASE_URL}/products/${id}`);
  return item;
}

async function getProducts() {
  const items = await axios.get(`${BASE_URL}/products`);
  return items;
}

const api = {
  createUser,
  login,
  validateToken,
  checkout,
  getProduct,
  getProducts
}

export default api;