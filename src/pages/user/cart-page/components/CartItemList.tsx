import { useTranslation } from "react-i18next";
import CartItem from "./CartItem";
import type { CartItem as CartItemType } from "../../../../redux/features/cartSlice";

interface CartItemListProps {
  cartItems: CartItemType[];
}

export default function CartItemList({ cartItems } : CartItemListProps) {
  const { t } = useTranslation();
  console.log("CartItemList cartItems:", cartItems);

  return (
    <div className="shadow-md">
      <div className="font-semibold text-gray-700 border-b p-6">
        {t("cartPage.product_list_title")}
      </div>
      <div className="divide-y p-6 pt-0">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
