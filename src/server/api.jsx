import axios from "./axios";

const productsApi = {
  getProduct: async function () {
    return await axios.get("/products");
  },
};

export default productsApi;
