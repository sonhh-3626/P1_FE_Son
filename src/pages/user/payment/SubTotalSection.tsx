import { useState } from "react";
import { useTranslation } from "react-i18next";
import { type CartItem } from "../../../redux/features/cartSlice";
import ShippingOptions, { type ShippingOptionType } from "./ShippingOptions";

interface SubTotalSectionProps {
  cartItems: CartItem[];
  discount: number;
  finalTotal: number;
  isFreeShipping: boolean;
}

export default function SubTotalSection({ cartItems, discount, finalTotal, isFreeShipping }: SubTotalSectionProps) {
  const { t } = useTranslation();
  const [selectedShippingOption, setSelectedShippingOption] = useState<ShippingOptionType>("flat_rate");

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const subtotal = calculateSubtotal();
  const shippingCost = isFreeShipping ? 0 : (selectedShippingOption === "flat_rate" ? 15 : 0);
  const totalWithShipping = finalTotal + shippingCost;

  const handleShippingChange = (option: ShippingOptionType) => {
    setSelectedShippingOption(option);
  };

  return (
    <div>
      <div className="border-b border-gray-200 pb-4 mb-4">
        <div className="flex justify-between text-sm font-medium text-gray-700 mb-2">
          <span>{t('product_name')}</span>
          <span>{t('cart_subtotal')}</span>
        </div>

        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between text-sm text-gray-600 mb-1">
            <span>{item.name} x {item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <div className="flex justify-between text-sm text-gray-600">
          <span>{t('cart_subtotal')}</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between text-sm text-green-600 mt-1">
            <span>{t('coupon_discount')}</span>
            <span>-${discount.toFixed(2)}</span>
          </div>
        )}
      </div>

      <ShippingOptions onShippingChange={handleShippingChange} selectedShippingOption={selectedShippingOption} isFreeShipping={isFreeShipping} />

      <div className="flex justify-between text-lg font-bold mb-4">
        <span>{t('cart_total')}</span>
        <span>${totalWithShipping.toFixed(2)}</span>
      </div>
    </div>
  );
}
