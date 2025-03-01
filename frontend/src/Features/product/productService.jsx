import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";


const getAllProducts = async () => {
  
  const response = await axios.get(
    `${base_url}product?`
  );
  if (response.data) {
    return response.data;
  }
};
const getAProduct = async (id) => {
  const response = await axios.get(`${base_url}product/${id}`);
  if (response.data) {
    return response.data;
  }
};
const rateProduct = async (data) => {
  const response = await axios.put(`${base_url}product/rating`, data, config);
  if (response.data) {
    return response.data;
  }
};

export const productService = {
  getAllProducts,
  getAProduct,
  rateProduct,
};
