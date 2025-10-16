import Rating from '../../common/Rating';
import DiscountPrice from '../../common/DiscountPrice';
import AddToCartButton from '../../common/AddToCartButton';

interface Props {
  productId: number;
  name: string;
  price: number;
  rating: number;
  discountPercentage: number;
  onAddToCart: () => void;
}

export default function DealsOfTheDayInfoSection({
  productId,
  name,
  price,
  rating,
  discountPercentage,
  onAddToCart,
}: Props) {
  const currentPrice = price * (1 - (discountPercentage || 0) / 100);

  return (
    <div className="flex flex-col w-3/5">
      <h3 className="text-base font-semibold text-gray-800 mt-1 mb-1">{name}</h3>
      <Rating rating={rating} className="mb-1" />
      <div className="mt-1 mb-2 flex items-baseline justify-between">
        <DiscountPrice originalPrice={price} currentPrice={currentPrice} />
      </div>
      <AddToCartButton
        productId={productId}
        onAddToCart={onAddToCart}
        className="w-full text-[#634C9F] py-2 px-3 rounded-full border-[#634C9F]
                border-1 cursor-pointer font-semibold mt-2
                hover:bg-[#634C9F] hover:text-white"
      />
    </div>
  );
}
