import { useState } from 'react';
import { type Product } from '../../../../types/Product';
import TabsHeader from './TabsHeader';
import DescriptionTab from './DescriptionTab';
import ReviewsTab from './ReviewsTab';

interface ProductTabsProps {
  product: Product;
}

export default function ProductTabs({ product }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState<'description' | 'reviews'>('description');

  return (
    <div className="mt-8">
      <TabsHeader activeTab={activeTab} setActiveTab={setActiveTab} reviewsCount={product.ratingCount || 0} />
      <div className="mt-4 p-4 bg-white rounded-lg shadow-sm">
        {activeTab === 'description' && <DescriptionTab description={product.description} />}
        {activeTab === 'reviews' && <ReviewsTab productId={product.id} />}
      </div>
    </div>
  );
}
