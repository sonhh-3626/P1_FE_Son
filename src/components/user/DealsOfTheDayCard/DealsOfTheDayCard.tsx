import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateProduct } from '../../../redux/features/productSlice';
import { addItemToCart } from '../../../redux/features/cartSlice';
import { useCountdown } from '../../../hooks/useCountdown';
import { type ProductType } from '../../../types/Product';
import { type RootState } from '../../../redux/store';
import DealsOfTheDayImageSection from './DealsOfTheDayImageSection';
import DealsOfTheDayInfoSection from './DealsOfTheDayInfoSection';
import DealsCountdown from './DealsCountdown';

interface DealsOfTheDayCardProps {
  productId: number;
  discountPercentage: number;
  type: ProductType;
  rating: number;
  dealEndTime?: Date;
  description?: string;
  availableQuantity?: number;
  totalQuantity?: number;
}

export default function DealsOfTheDayCard({
  productId,
  discountPercentage,
  type,
  rating,
  availableQuantity,
}: DealsOfTheDayCardProps) {
  const product = useSelector((state: RootState) =>
    state.products.items.find((p) => p.id === productId)
  );
  const dispatch = useDispatch();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { days, hours, minutes, seconds } = useCountdown(product?.dealEndTime);

  if (!product) return null;

  const handleLovedClick = (event: React.MouseEvent, newLoved: boolean) => {
    event.stopPropagation();
    dispatch(updateProduct({ ...product, loved: newLoved }));
  };

  const handleAddToCart = () => dispatch(addItemToCart(product));
  const handleIndicatorClick = (index: number) => setCurrentImageIndex(index);

  return (
    <div className="relative p-2 bg-white border border-gray-200 rounded-lg w-120">
      <div className="flex items-start mb-4 pb-2">
        <DealsOfTheDayImageSection
          imageUrls={product.imageUrls || []}
          name={product.name}
          discountPercentage={discountPercentage}
          type={type}
          loved={product.loved || false}
          currentImageIndex={currentImageIndex}
          onLovedClick={handleLovedClick}
          onIndicatorClick={handleIndicatorClick}
        />

        <DealsOfTheDayInfoSection
          productId={product.id}
          name={product.name}
          price={product.price}
          rating={rating}
          discountPercentage={discountPercentage}
          onAddToCart={handleAddToCart}
        />
      </div>

      {availableQuantity !== undefined && (
        <p className="text-xs text-gray-700 mt-1 mb-1">
          available only: {availableQuantity}
        </p>
      )}

      <DealsCountdown
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        dealEndTime={product.dealEndTime}
      />
    </div>
  );
}
