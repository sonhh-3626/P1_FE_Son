import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { type RootState, useAppDispatch } from '../../../redux/store';
import { fetchProductsByCategory } from '../../../redux/features/productSlice';
import ProductCard from '../../../components/user/product/ProductCard';
import SectionTitle from '../../../components/common/SectionTitle';

interface RelatedProductsProps {
  currentProductId: number;
  category: string;
}

export default function RelatedProducts({ currentProductId, category }: RelatedProductsProps) {
  const dispatch = useAppDispatch();
  const { items: products, status, error } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    if (category) {
      dispatch(fetchProductsByCategory(category));
    }
  }, [category, dispatch]);

  const relatedProducts = products.filter(
    (product) => product.id !== currentProductId && product.category === category
  );

  return (
    <div className="mt-16">
      <SectionTitle title="Related Products" />
      {status === 'loading' && <p>Loading related products...</p>}
      {status === 'failed' && <p className="text-red-500">Error: {error}</p>}
      {status === 'succeeded' && relatedProducts.length === 0 && (
        <p>No related products found.</p>
      )}
      {status === 'succeeded' && relatedProducts.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} productId={product.id} />
          ))}
        </div>
      )}
    </div>
  );
}
