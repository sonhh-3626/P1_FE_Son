import type { BillingDetailsData, BillingDetailsRef } from "../pages/user/payment/types";
import { type CartItem } from "../redux/features/cartSlice";

export interface Order {
  id: string;
  billingDetails: BillingDetailsData;
  items: CartItem[];
  subtotal: number;
  appliedDiscount: number;
  isFreeShipping: boolean;
  finalTotal: number;
  orderDate: string;
}
