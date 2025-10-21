import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { fetchProductById } from '../../../services/productService';

import ProductDetailImages from '../../../components/user/ProductDetails/ProductImages/ProductDetailImages';
import ProductInfo from '../../../components/user/ProductDetails/ProductInfo/ProductInfo';
import ProductTabs from '../../../components/user/ProductDetails/ProductTabs/ProductTabs';
import RelatedProducts from '../../../components/user/ProductDetails/RelatedProducts/RelatedProducts';

export default function ProductDetailPage() {
  const { t } = useTranslation();
  const { id: productIdString } = useParams<{ id: string }>();
  const productId = Number(productIdString);

  const dispatch = useAppDispatch();
  const { selectedProduct: product, status, error } = useAppSelector(state => state.products);

  useEffect(() => {
    if (productId && !isNaN(productId) && (!product || product.id !== productId)) {
      dispatch(fetchProductById(productId));
    }
  }, [productId, dispatch, product]);


  if (status === 'loading') {
    return (
      <div className="mx-[15%] py-10 text-center text-gray-500">
        {t('loading')}...
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="mx-[15%] py-10 text-center text-red-500">
        {t('error')}: {error || t('product.notFoundOrLoading')}
      </div>
    );
  }

  if (!product) {
    return (
      <div className="mx-[15%] py-10 text-center text-gray-500">
        {t('product.notFoundOrLoading')}
      </div>
    );
  }

  console.log(product)

  return (
    <div className="mx-[15%] py-10">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-2/5">
          <ProductDetailImages product={product} />
        </div>
        <div className="w-3/5">
          <ProductInfo product={product} />
        </div>
      </div>

      <div className="mt-10">
        <ProductTabs product={product} />
      </div>

      <div className="mt-16">
        <RelatedProducts
          currentProductId={product.id}
          category={product?.category?.name || ''}
        />
      </div>
    </div>
  );
}
