import { useSelector } from 'react-redux';
import { type RootState } from '../../../redux/store';
import { useTranslation } from "react-i18next";

import ProductListHeader from '../../../components/common/ProductListHeader';
import DealsOfTheDayCard from '../../../components/user/DealsOfTheDayCard/DealsOfTheDayCard';
import DealsOfTheDayHorizontalCard from '../../../components/user/DealsOfTheDayCard/DealsOfTheDayHorizontalCard';

export default function DealsOfTheDaySection() {
  const { t } = useTranslation();
  const productIds = useSelector((state: RootState) =>
    state.products.items.slice(0, 3).map(p => p.id)
  );

  const dealsProducts = [
    productIds[0] ? {
      productId: productIds[0],
      discountPercentage: 75,
      type: "organic" as "organic",
      rating: 4.5,
      dealEndTime: new Date(Date.now() + 84 * 24 * 60 * 60 * 1000),
    } : undefined,
    productIds[1] ? {
      productId: productIds[1],
      discountPercentage: 14,
      type: "cold sale" as "cold sale",
      rating: 4.7,
      dealEndTime: new Date(Date.now() + 46 * 24 * 60 * 60 * 1000),
    } : undefined,
    productIds[2] ? {
      productId: productIds[2],
      discountPercentage: 11,
      type: "cold sale" as "cold sale",
      rating: 4.2,
      description: "Vivamus adipiscing nisi dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent Vivamus adipiscing nisi ut dolor dignissim semper.",
      availableQuantity: 18,
      totalQuantity: 50,
      dealEndTime: new Date(Date.now() + 11 * 24 * 60 * 60 * 1000),
    } : undefined,
  ].filter(Boolean);

  return (
    <div>
      <ProductListHeader title={t('dealsOfTheDaySection.title')} subtitle="Don't miss out on these limited-time offers!" pathTo="deals-of-the-day" />
      <div className="flex flex-row gap-6 justify-center">
        <div className="flex flex-col items-center">
          {dealsProducts.slice(0, 2).map((deal, index) => (
            deal && (
              <DealsOfTheDayCard
                key={deal.productId || index}
                productId={deal.productId}
                discountPercentage={deal.discountPercentage}
                type={deal.type}
                rating={deal.rating}
                dealEndTime={deal.dealEndTime}
                description={deal.description}
                availableQuantity={deal.availableQuantity}
                totalQuantity={deal.totalQuantity}
              />
            )
          ))}
        </div>
        <div className="items-center">
          {dealsProducts[2] && (
            <DealsOfTheDayHorizontalCard
              key={dealsProducts[2].productId}
              productId={dealsProducts[2].productId}
              discountPercentage={dealsProducts[2].discountPercentage}
              type={dealsProducts[2].type}
              rating={dealsProducts[2].rating}
              dealEndTime={dealsProducts[2].dealEndTime}
              description={dealsProducts[2].description}
              availableQuantity={dealsProducts[2].availableQuantity}
              totalQuantity={dealsProducts[2].totalQuantity}
            />
          )
          }
        </div>
      </div>
    </div>
  );
}
