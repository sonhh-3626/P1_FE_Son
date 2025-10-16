import { useSelector } from 'react-redux';
import { type RootState } from '../../../redux/store';
import { useTranslation } from "react-i18next";

import ProductListHeader from "../../../components/common/ProductListHeader";
import NewsThisWeek from "../../../components/user/NewsThisWeek/NewsThisWeek";
import ProductCard from "../../../components/user/product/ProductCard";
import { newsData } from "../../../data/newsData";

export default function FeaturedProductSection() {
  const { t } = useTranslation();
  const productIds = useSelector((state: RootState) =>
    state.products.items.slice(0, 4).map(p => p.id)
  );

  return (
    <div className="my-10">
      <ProductListHeader title={t('featuredProductSection.title')}
        subtitle={t('featuredProductSection.subtitle')}
        pathTo="new-arrivals"
      />

      <div className="flex my-10">
        <NewsThisWeek
          title={t('featuredProductSection.freshFindsTitle')}
          description={t('featuredProductSection.freshFindsDescription')}
          image="news-this-week-4.jpg"
          orientation="vertical"
          style={{borderRadius: '8px 0 0 8px'}}
        />
        <div className="flex">
          {productIds.map((id) => (
            <ProductCard key={id} productId={id} />
          ))}
        </div>
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
