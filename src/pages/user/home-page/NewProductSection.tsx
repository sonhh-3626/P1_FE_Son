import { useTranslation } from "react-i18next";
import { useSelector } from 'react-redux';

import { type RootState } from '../../../redux/store';
import ProductListHeader from "../../../components/common/ProductListHeader";
import NewsThisWeek from "../../../components/user/NewsThisWeek/NewsThisWeek";
import ProductCard from "../../../components/user/product/ProductCard";
import { newsData } from "../../../data/newsData";

export default function NewProductSection() {
  const { t } = useTranslation();
  const productIds = useSelector((state: RootState) =>
    state.products.items.slice(0, 6).map(p => p.id)
  );

  return (
    <div>
      <ProductListHeader title={t('newProducts.title')} subtitle={t('newProducts.subtitle')} pathTo="new-products" />
      <div className="flex">
        {productIds.map((id) => (
          <ProductCard key={id} productId={id} />
        ))}
      </div>
      <div className="flex gap-4 my-10">
        {newsData.slice(0, 3).map((newsItem) => (
          <NewsThisWeek
            key={newsItem.id}
            title={newsItem.title}
            description={newsItem.description}
            image={newsItem.image}
            style={{ flex: 1 }}
          />
        ))}
      </div>
    </div>
  );
}
