import type { Product } from '../../../types/Product';
import DiscountPrice from '../../common/DiscountPrice';
import ProductTitle from './ProductTitle';
import Rating from '../../common/Rating';
import SKU from '../../common/SKU';

interface ProductDescriptionProps {
  product: Product;
  handleOnClick: () => void;
}

export default function ProductDescription({ product, handleOnClick = () => {} }: ProductDescriptionProps) {
  return (
    <div className="flex flex-col flex-grow" onClick={handleOnClick}>
      <ProductTitle title={product.name} />

      <Rating rating={product.rating} />
      <SKU code={product.sku || ''} />
      <DiscountPrice
        originalPrice={product.price}
        currentPrice={product.price * (1 - (product.discountPercentage || 0) / 100)}
      />
    </div>
  );
}
