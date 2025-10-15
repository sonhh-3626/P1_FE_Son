import { useTranslation } from 'react-i18next';

interface TabsHeaderProps {
  activeTab: 'description' | 'reviews';
  setActiveTab: (tab: 'description' | 'reviews') => void;
  reviewsCount: number;
}

export default function TabsHeader({ activeTab, setActiveTab, reviewsCount }: TabsHeaderProps) {
  const { t } = useTranslation();

  return (
    <div className="flex border-b border-gray-200">
      <button
        className={`py-2 px-4 text-sm font-medium ${
          activeTab === 'description'
            ? 'border-b-2 border-blue-600 text-blue-600'
            : 'text-gray-500 hover:text-gray-700'
        }`}
        onClick={() => setActiveTab('description')}
      >
        {t('product_description_tab')}
      </button>
      <button
        className={`py-2 px-4 text-sm font-medium ${
          activeTab === 'reviews'
            ? 'border-b-2 border-blue-600 text-blue-600'
            : 'text-gray-500 hover:text-gray-700'
        }`}
        onClick={() => setActiveTab('reviews')}
      >
        {t('product_reviews_tab')} ({reviewsCount})
      </button>
    </div>
  );
}
