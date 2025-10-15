import { useTranslation } from "react-i18next";
import AdjustItem from "../../../common/AdjustItem";
import Button from "../../../common/Button";

interface ProductPurchaseActionsProps {
  value: number;
  onDecrement: () => void;
  onIncrement: () => void;
  onAddToCart: (productId: number) => void;
  onBuyNow: () => void;
  productId: number;
}

export default function ProductPurchaseActions({
  value,
  onDecrement,
  onIncrement,
  onAddToCart,
  onBuyNow,
  productId,
}: ProductPurchaseActionsProps) {
  const { t } = useTranslation();
  return (
    <div className="flex gap-2 mt-4">
      <AdjustItem value={value} onDecrement={onDecrement} onIncrement={onIncrement} />

      <Button
        onClick={() => onAddToCart(productId)}
        className="bg-green-500 text-white px-4 py-2 rounded-md"
      >
        {t('product_actions.add_to_cart')}
      </Button>
      <Button
        className="bg-gray-800 text-white px-4 py-2 rounded-md"
        onClick={onBuyNow}
      >
        {t('product_actions.buy_now')}
      </Button>
    </div>
  )
}
