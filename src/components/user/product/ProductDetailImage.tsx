import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../../../redux/features/productSlice';
import { addItemToCart } from '../../../redux/features/cartSlice';
import AddToCartIcon from '../../common/AddToCartIcon';
import DiscountBadge from '../../common/DiscountBadge';
import LovedToggle from '../../common/LovedToggle';
import TypeBadge from '../../common/TypeBadge';
import ImageSliderIndicator from '../../common/ImageSliderIndicator';
import type { Product } from '../../../types/Product';

interface ProductDetailImageProps {
  product: Product;
}

export default function ProductDetailImage({ product }: ProductDetailImageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleIndicatorClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  const dispatch = useDispatch();

  const handleLovedClick = (event: React.MouseEvent, newLoved: boolean) => {
    event.stopPropagation();
    const updatedProduct = { ...product, loved: newLoved };
    dispatch(updateProduct(updatedProduct));
  };

  const handleAddToCart = () => {
    dispatch(addItemToCart(product));
  };

  return (
    <div className="relative mt-4 mx-2">
      <img
        src={product.imageUrls?.[currentImageIndex] || ''}
        alt={product.name}
      />

      <div className="absolute inset-0 flex flex-col justify-between p-2">
        <div className="flex justify-between">
          <DiscountBadge discountPercentage={product.discountPercentage} />
          <LovedToggle loved={product.loved || false} onLovedClick={handleLovedClick} />
        </div>

        <div className="flex justify-between items-end">
          {product.product_type && (
            <TypeBadge
              label={product.product_type.toUpperCase()}
              type={product.product_type === "organic" ? "organic" : product.product_type === "cold sale" ? "cold-sale" : ""}
            />
          )}

          <ImageSliderIndicator
            totalImages={product.imageUrls?.length || 0}
            currentIndex={currentImageIndex}
            onIndicatorClick={handleIndicatorClick}
            className="absolute bottom-10 right-3 z-10"
          />
          <AddToCartIcon productId={product.id} onAddToCart={handleAddToCart} />
        </div>
      </div>
    </div>
  );
}
