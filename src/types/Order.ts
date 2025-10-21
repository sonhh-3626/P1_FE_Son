import type { BillingDetailsData, BillingDetailsRef } from "../pages/user/payment/types";
import { type CartItem } from "../redux/features/cartSlice";

export interface Order {
  [x: string]: any;
  id: string;
  billingDetails: BillingDetailsData;
  items: CartItem[];
  subtotal: number;
  appliedDiscount: number;
  isFreeShipping: boolean;
  finalTotal: number;
  orderDate: string;
  status: string;
}

export enum OrderStatus {
  PENDING = "Pending",
  PROCESSING = "Processing",
  SHIPPED = "Shipped",
  DELIVERED = "Delivered",
  CANCELLED = "Cancelled",
}

export enum OrderSortOption {
  DATE_DESC = "date_desc",
  DATE_ASC = "date_asc",
  TOTAL_DESC = "total_desc",
  TOTAL_ASC = "total_asc",
}
