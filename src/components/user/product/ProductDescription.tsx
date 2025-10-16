import type { Product } from '../../../types/Product';
import DiscountPrice from '../../common/DiscountPrice';
import StockIndicator from '../../common/StockIndicator';
import ProductTitle from './ProductTitle';
import Rating from '../../common/Rating';

interface ProductDescriptionProps {
  product: Product;
}

export default function ProductDescription({ product }: ProductDescriptionProps) {
  return (
    <div className="p-4 flex flex-col flex-grow">
      <Rating rating={product.rating} />

      <ProductTitle title={product.name} />

      <DiscountPrice
        originalPrice={product.price}
        currentPrice={product.price * (1 - (product.discountPercentage || 0) / 100)}
      />

      {product.stockQuantity > 0 && (
        <div className="my-2">
          <StockIndicator stock={product.stockQuantity} total={product.totalQuantity} />
        </div>
      )}
    </div>
  );
}
