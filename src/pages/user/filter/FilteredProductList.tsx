import { useTranslation } from 'react-i18next';
import ProductCard from "../../../components/user/product/ProductCard";
import type { Product } from "../../../types/Product";

interface FilteredProductListProps {
  paginatedProducts: Product[];
}

export default function FilteredProductList({ paginatedProducts = [] }: FilteredProductListProps) {
  const { t } = useTranslation();

  return (
    <>
      {paginatedProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
          {paginatedProducts.map((product) => (
            <ProductCard key={product.id} productId={product.id} />
          ))}
        </div>
      ) : (
        <div className="text-center py-8 text-gray-500">
          {t('no_matching_products')}
        </div>
      )}
    </>
  );
}
