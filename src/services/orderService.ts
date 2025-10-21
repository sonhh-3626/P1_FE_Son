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

import { OrderSortOption } from '../types/Order';

const fetchOrders = async (sortOption: OrderSortOption, currentPage: number, itemsPerPage: number) => {
  try {
    const response = await axios.get(`${serverUrl}/orders`, {
      params: {
        _sort: sortOption.includes('date') ? 'orderDate' : 'finalTotal',
        _order: sortOption.includes('desc') ? 'desc' : 'asc',
        _page: currentPage,
        _limit: itemsPerPage,
      },
    });
    const totalCount = parseInt(response.headers['x-total-count'] || '0', 10);
    const totalPages = Math.ceil(totalCount / itemsPerPage);
    return { data: response.data, totalPages };
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
};

const fetchOrderById = async (id: string) => {
  try {
    const response = await axios.get(`${serverUrl}/orders/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching order with ID ${id}:`, error);
    throw error;
  }
};

export const orderService = {
  createOrder,
  fetchOrders,
  fetchOrderById,
};
