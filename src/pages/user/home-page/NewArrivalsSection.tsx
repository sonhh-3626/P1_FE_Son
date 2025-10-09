import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { type RootState } from '../../../redux/store';
import ProductListHeader from '../../../components/common/ProductListHeader';
import NewsThisWeek from '../../../components/user/NewsThisWeek/NewsThisWeek';
import ProductCard from '../../../components/user/product/ProductCard';
import ReviewCard from '../../../components/user/ReviewCard/ReviewCard';

export default function NewArrivalsSection() {
  const { t } = useTranslation();
  const productIds = useSelector((state: RootState) =>
    state.products.items.slice(0, 5).map(p => p.id)
  );

  return (
    <div>
      <ProductListHeader title={t('newArrivals.title')} subtitle={t('newArrivals.subtitle')} pathTo="new-arrivals" />
      <div className="flex">
        <div>
          <div style={{ justifyContent: 'center', marginBottom: '1px' }}>
            <ReviewCard
              userName="Machic"
              isFeatured={true}
              rating={4}
              reviewCount={41}
              comment={t('newArrivals.reviewComment')}
            />
          </div>
          <NewsThisWeek
            title={t('newArrivals.news1.title')}
            description={t('newArrivals.news1.description')}
            image="new-this-week-5.jpg"
            style={{ width: "355px", borderRadius: '0 0 0 8px' }}
            hasButton={false}
          />
        </div>
          {productIds.map((id) => (
            <ProductCard key={id} productId={id} />
          ))}
      </div>

      <div className="flex gap-4 my-10">
        <NewsThisWeek
          title={t('newArrivals.news2.title')}
          description={t('newArrivals.news2.description')}
          image="news-this-week-3.jpg"
          style={{ flex: 1 }}
        />
        <NewsThisWeek
          title={t('newArrivals.news2.title')}
          description={t('newArrivals.news2.description')}
          image="news-this-week-3.jpg"
          style={{ flex: 1 }}
        />
      </div>
    </div>
  );
}
