export interface Coupon {
  id: string;
  discountPercentage: number;
  minAmount: number;
  expires: string;
  freeShipping?: boolean;
}
