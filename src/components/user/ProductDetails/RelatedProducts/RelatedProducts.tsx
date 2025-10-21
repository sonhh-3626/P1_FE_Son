import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { type RootState, useAppDispatch } from '../../../../redux/store';
import { fetchProductsByCategory } from '../../../../services/productService';
import ProductCard from '../../../../components/user/product/ProductCard';
import SectionTitle from '../../../../components/common/SectionTitle';

interface RelatedProductsProps {
  currentProductId: number;
  category: string;
}

export default function RelatedProducts({ currentProductId, category }: RelatedProductsProps) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { items: products, status, error } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    if (category && status !== 'loading' && status !== 'succeeded') {
      dispatch(fetchProductsByCategory(category));
    }
  }, [category, dispatch, status]);

  const relatedProducts = products.filter(
    (product) => product.id !== currentProductId && product.category.name === category
  );

  return (
    <div className="mt-16">
      <SectionTitle title={t('relatedProducts.title')} />
      {status === 'loading' && <p>{t('relatedProducts.loading')}</p>}
      {status === 'failed' && <p className="text-red-500">{t('relatedProducts.error', { error })}</p>}
      {status === 'succeeded' && relatedProducts.length === 0 && (
        <p>{t('relatedProducts.noProductsFound')}</p>
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
