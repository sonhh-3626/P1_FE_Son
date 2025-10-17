import { type Coupon } from '../types/Coupon';
import i18n from 'i18next';

interface CouponResponse {
  coupons: Coupon[];
}

export const fetchCoupons = async (): Promise<Coupon[]> => {
  try {
    const response = await fetch('/db.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: CouponResponse = await response.json();
    return data.coupons;
  } catch (error) {
    console.error("Error fetching coupons:", error);
    return [];
  }
};

export const validateCoupon = async (couponCode: string, currentTotal: number): Promise<{ isValid: boolean; discount: number; freeShipping: boolean; message: string }> => {
  const coupons = await fetchCoupons();
  const coupon = coupons.find(c => c.id === couponCode.toUpperCase());
  const currentDate = new Date();

  if (!coupon) {
    return { isValid: false, discount: 0, freeShipping: false, message: i18n.t('couponService.couponNotFound') };
  }

  if (new Date(coupon.expires) < currentDate) {
    return { isValid: false, discount: 0, freeShipping: false, message: i18n.t('couponService.couponExpired') };
  }

  if (currentTotal < coupon.minAmount) {
    return { isValid: false, discount: 0, freeShipping: false, message: i18n.t('couponService.minAmountRequired', { amount: coupon.minAmount }) };
  }

  const discountAmount = (currentTotal * coupon.discountPercentage) / 100;
  return {
    isValid: true,
    discount: discountAmount,
    freeShipping: coupon.freeShipping || false,
    message: i18n.t('couponService.couponAppliedSuccessfully')
  };
};
