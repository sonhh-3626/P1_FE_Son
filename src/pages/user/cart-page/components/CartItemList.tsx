import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader } from '../../../../components/common/Card';
import CartItem from "./CartItem";
import type { CartItem as CartItemType } from "../../../../redux/features/cartSlice";

interface CartItemListProps {
  cartItems: CartItemType[];
}

export default function CartItemList({ cartItems } : CartItemListProps) {
  const { t } = useTranslation();
  return (
    <Card className="shadow-md">
      <CardHeader className="font-semibold text-gray-700 border-b">
        {t("cartPage.product_list_title")}
      </CardHeader>
      <CardContent className="divide-y">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </CardContent>
    </Card>
  );
};
