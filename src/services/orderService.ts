import axios from 'axios';

const serverUrl = import.meta.env.VITE_SERVER_URL;

const createOrder = async (orderData: any) => {
  try {
    const response = await axios.post(`${serverUrl}/orders`, orderData);
    return response.data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};

const fetchOrders = async () => {
  try {
    const response = await axios.get(`${serverUrl}/orders`);
    return response.data;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
};

export const orderService = {
  createOrder,
  fetchOrders,
};
