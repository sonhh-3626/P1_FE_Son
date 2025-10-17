import BillingDetails from "./BillingDetails";
import CouponInput from "./CouponInput";
import { useEffect, useState, useMemo, useRef, useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { type RootState } from "../../../redux/store";
import { type CartItem } from "../../../redux/features/cartSlice";
import { type BillingDetailsRef } from "./types";
import FreeShipingThrehold from "./FreeShippingThreshold";
import PaymentMethods from "./PaymentMethods";
import PrivacyComfirm from "./PrivacyComfirm";
import SubTotalSection from "./SubTotalSection";
import { useNavigate } from "react-router-dom";

export default function PaymentPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const billingDetailsRef = useRef<BillingDetailsRef>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [isFreeShipping, setIsFreeShipping] = useState(false);
  const reduxCartItems = useSelector((state: RootState) => state.cart.items);

  if(reduxCartItems.length === 0) {
    navigate("/cart");
  }

  useEffect(() => {
    setCartItems(reduxCartItems);
  }, [reduxCartItems]);

  const subtotal = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cartItems]);

  const handleCouponApplied = (discount: number, freeShipping: boolean) => {
    setAppliedDiscount(discount);
    setIsFreeShipping(freeShipping);
  };

  const finalTotal = subtotal - appliedDiscount;

  const handlePlaceOrder = useCallback(() => {
    if (billingDetailsRef.current) {
      const { data, isValid } = billingDetailsRef.current.validateAndGetFormData();

      if (isValid && data) {
        console.log("Dữ liệu form hợp lệ:", data);
        alert(t('order_successful_message'));
      } else {
        console.error("Lỗi Validation. Không thể đặt hàng.");
      }
    }
  }, [t]);

  return (
    <div className="mx-[15%]">
      <div className="flex flex-col my-5">
        <div className="mb-5">
          <CouponInput currentTotal={subtotal} onCouponApplied={handleCouponApplied} />
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 lg:w-3/4">
            <FreeShipingThrehold />
            <BillingDetails ref={billingDetailsRef} />
          </div>

          <div className="lg:w-1/4 bg-[#00000003] p-6 rounded-md border border-[#E5E7EB]">
            <h2 className="text-xl font-semibold mb-4">{t("your_order")}</h2>

            <SubTotalSection cartItems={cartItems} discount={appliedDiscount} finalTotal={finalTotal} isFreeShipping={isFreeShipping} />

            <PaymentMethods />

            <PrivacyComfirm />
            <button
              className="w-full bg-purple-700 text-white py-3 rounded-md font-semibold hover:bg-purple-800"
              onClick={handlePlaceOrder}
            >
              {t("order_btn")}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
