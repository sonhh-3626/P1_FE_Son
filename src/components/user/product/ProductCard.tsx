import { useSelector } from 'react-redux';

import ProductDetailImage from './ProductDetailImage';
import ProductDescription from './ProductDescription';
import { type RootState } from '../../../redux/store';

interface ProductCardProps {
  productId: number;
}

export default function ProductCard({ productId }: ProductCardProps) {
  const product = useSelector((state: RootState) =>
    state.products.items.find(p => p.id === productId)
  );

  if (!product) {
    return null;
  }

  return (
    <div className="border-1 border-gray-200 overflow-hidden">
      <ProductDetailImage product={product} />
      <ProductDescription product={product} />
    </div>
  );
}
