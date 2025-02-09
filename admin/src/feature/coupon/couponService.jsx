import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosconfig";

const getCoupon = async () => {
  const response = await axios.get(`${base_url}coupon/`);
//   console.log(response.data);
  return response.data;
};

const createCoupons = async (coupon) => {
  const response = await axios.post(`${base_url}coupon/`, coupon, config);

  return response.data;
};

const updateCoupon = async (coupon) => {
  const response = await axios.put(
    `${base_url}coupon/${coupon.id}`,
    {
      name: coupon.couponData.name,
      expiry: coupon.couponData.expiry,
      discount: coupon.couponData.discount,
    },
    config
  );

  return response.data;
};
const getACoupon = async (id) => {
  // console.log(id);
  const response = await axios.get(`${base_url}coupon/${id}`, config);
  // console.log(response.data);

  return response.data;
};

const deleteCoupon = async (id) => {
  const response = await axios.delete(`${base_url}coupon/${id}`, config);

  return response.data;
};

const couponService = {
  getCoupon,
  createCoupons,
  updateCoupon,
  getACoupon,
  deleteCoupon
};

export default couponService;
