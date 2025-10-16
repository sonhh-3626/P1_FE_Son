import { useTranslation } from "react-i18next";

interface AddToCartButtonProps {
  productId: number;
  className?: string;
  onAddToCart: (productId: number) => void;
}

export default function AddToCartButton({ productId, onAddToCart, className }: AddToCartButtonProps) {
  const { t } = useTranslation();
  const handleOnClick = () => {
    onAddToCart(productId);
  };

  return (
    <div className={`${className}`}>
      <button onClick={handleOnClick}>
        <span className="flex items-center justify-between gap-2">
          <span>{t("add_to_cart")}</span>
          <span>+</span>
        </span>
      </button>
    </div>
  );
}
