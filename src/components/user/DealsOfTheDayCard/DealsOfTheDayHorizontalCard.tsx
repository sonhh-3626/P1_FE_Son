import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addItemToCart } from '../../../redux/features/cartSlice';
import { useCountdown } from '../../../hooks/useCountdown';
import { updateProduct } from '../../../redux/features/productSlice';
import { type RootState } from '../../../redux/store';
import { type ProductType } from '../../../types/Product';
import DealsHorizontalImageSection from './DealsHorizontalImageSection';
import DealsHorizontalInfoSection from './DealsHorizontalInfoSection';

interface DealsOfTheDayHorizontalCardProps {
  productId: number;
  discountPercentage: number;
  type: ProductType;
  rating: number;
  dealEndTime: Date;
  description?: string;
  availableQuantity?: number;
  totalQuantity?: number;
}

export default function DealsOfTheDayHorizontalCard({
  productId,
  discountPercentage,
  type,
  rating,
  description,
}: DealsOfTheDayHorizontalCardProps) {
  const product = useSelector((state: RootState) =>
    state.products.items.find((p) => p.id === productId)
  );

  const dispatch = useDispatch();
  const { days, hours, minutes, seconds } = useCountdown(product?.dealEndTime);

  if (!product) return null;

  const handleLovedClick = (e: React.MouseEvent, newLoved: boolean) => {
    e.stopPropagation();
    dispatch(updateProduct({ ...product, loved: newLoved }));
  };

  const handleAddToCart = () => dispatch(addItemToCart(product));

  return (
    <div className="relative flex p-4 border-2 border-red-500 rounded-lg">
      <DealsHorizontalImageSection
        imageUrl={product.imageUrls?.[0]}
        name={product.name}
        discountPercentage={discountPercentage}
        type={type}
        loved={product.loved || false}
        onLovedClick={handleLovedClick}
      />

      <DealsHorizontalInfoSection
        productId={product.id}
        name={product.name}
        price={product.price}
        rating={rating}
        discountPercentage={discountPercentage}
        description={description}
        stockQuantity={product.stockQuantity}
        totalQuantity={product.totalQuantity}
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        dealEndTime={product.dealEndTime}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}
