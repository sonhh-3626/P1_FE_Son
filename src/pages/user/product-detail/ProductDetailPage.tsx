import { useParams } from 'react-router-dom';
import ProductDetailImages from '../../../components/user/ProductDetails/ProductImages/ProductDetailImages';
import { useSelector } from 'react-redux';
import { type RootState } from '../../../redux/store';
import ProductInfo from '../../../components/user/ProductDetails/ProductInfo/ProductInfo';
import ProductTabs from '../../../components/user/ProductDetails/ProductTabs/ProductTabs';
import RelatedProducts from '../../../components/user/ProductDetails/RelatedProducts/RelatedProducts';
import { useTranslation } from 'react-i18next';

export default function ProductDetailPage() {
  const { t } = useTranslation();
  const { id: productIdString } = useParams<{ id: string }>();
  const safeIdString = productIdString ?? '0';
  const productId = Number(safeIdString);

  const product = useSelector((state: RootState) =>
    state.products.items.find( p => p.id == productId)
  );

  return (
    <>
      {product ? (
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
            <RelatedProducts currentProductId={product.id} category={product.category} />
          </div>
        </div>
      ) : (
        <div className="mx-[15%] py-10 text-center text-red-500">
          {t('product.notFoundOrLoading')}
        </div>
      )}
    </>
  )
}
