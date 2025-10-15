import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ProductDetailImage from './ProductDetailImage';
import ProductDescription from './ProductDescription';
import { type RootState } from '../../../redux/store';

interface ProductCardProps {
  productId: number;
}

export default function ProductCard({ productId }: ProductCardProps) {
  const navigate = useNavigate();
  const product = useSelector((state: RootState) =>
    state.products.items.find(p => p.id === productId)
  );

  if (!product) {
    return null;
  }

  const handleCardClick = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div className="border-1 border-gray-200 overflow-hidden">
      <ProductDetailImage product={product} />
      <ProductDescription product={product} handleOnClick={handleCardClick} />
    </div>
  );
}
