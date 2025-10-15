import { useState } from "react";
import Button from "../../../../components/common/Button";
import ConfirmItem from "./ConfirmItem";
import ProductDescription from "../../../../components/user/product/ProductDescription";
import SpecialOffer from "./SpecialOffer";
import ProductActions from "./ProductActions";
import ProductPurchaseActions from "./ProductPurchaseActions";
import type { Product } from "../../../../types/Product";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { addItemToCart } from "../../../../redux/features/cartSlice";
import { useTranslation } from "react-i18next";

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const { t } = useTranslation();

  const handleOrderOnWhatsApp = () => {
    navigate("whatsapp-order")
  }

  const handleDecrement = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch(addItemToCart(product));
    }
  };

  const handleBuyNow = () => {
    // TO DO navigate to Payment Page
  };

  const [dealEndTime] = useState<Date>(
    new Date(product.dealEndTime ? product.dealEndTime : Date.now())
  );

  return (
    <>
      <ProductDescription product={product} handleOnClick={() => {}} />

      <Button
        className="bg-green-500 text-white px-4 py-2 rounded-md"
        onClick={handleOrderOnWhatsApp}
      >
        {t('productInfo.orderOnWhatsApp')}
      </Button>

      {product.dealEndTime && (new Date(product.dealEndTime).getTime() > Date.now()) && (
        <SpecialOffer dealEndTime={dealEndTime} />
      )}

      <ProductPurchaseActions
        value={quantity}
        onDecrement={handleDecrement}
        onIncrement={handleIncrement}
        onAddToCart={() => handleAddToCart()}
        onBuyNow={handleBuyNow}
        productId={product.id}
      />

      <ConfirmItem />

      <ProductActions product={product} />
    </>
  )
}
