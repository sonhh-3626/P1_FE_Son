import Rating from '../../common/Rating';
import DiscountPrice from '../../common/DiscountPrice';
import StockIndicator from '../../common/StockIndicator';
import AddToCartButton from '../../common/AddToCartButton';
import DealsCountdown from './DealsCountdown';

interface Props {
  productId: number;
  name: string;
  price: number;
  rating: number;
  discountPercentage: number;
  description?: string;
  stockQuantity?: number;
  totalQuantity?: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  dealEndTime?: Date;
  onAddToCart: () => void;
}

export default function DealsHorizontalInfoSection({
  productId,
  name,
  price,
  rating,
  discountPercentage,
  description,
  stockQuantity,
  totalQuantity,
  days,
  hours,
  minutes,
  seconds,
  dealEndTime,
  onAddToCart,
}: Props) {
  const discountedPrice = price * (1 - (discountPercentage || 0) / 100);

  return (
    <div className="my-6 p-4 flex flex-col">
      <Rating rating={rating} />
      <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-0">{name}</h3>

      <DiscountPrice originalPrice={price} currentPrice={discountedPrice} />

      {description && (
        <p className="text-sm text-gray-600 mb-2 leading-tight">{description}</p>
      )}

      {stockQuantity !== undefined && (
        <StockIndicator stock={stockQuantity ?? 0} total={totalQuantity ?? 0} />
      )}

      <DealsCountdown
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        dealEndTime={dealEndTime}
      />

      <AddToCartButton
        productId={productId}
        onAddToCart={onAddToCart}
        className="bg-[#16A34A] text-white py-2 px-4 rounded-md border-none cursor-pointer text-base font-semibold mt-auto flex items-center justify-center gap-2 transition-colors duration-200 hover:bg-green-500 w-full"
      />
    </div>
  );
}
