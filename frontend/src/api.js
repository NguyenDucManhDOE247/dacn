import axios from "axios";

const BASE_URL = "http://139.59.122.167:32000";

const API = {
  user: axios.create({ baseURL: `${BASE_URL}/api/users` }),
  product: axios.create({ baseURL: `${BASE_URL}/api/products` }),
  order: axios.create({ baseURL: `${BASE_URL}/api/orders` }),
  payment: axios.create({ baseURL: `${BASE_URL}/api/payments` }),
};

export default API;
