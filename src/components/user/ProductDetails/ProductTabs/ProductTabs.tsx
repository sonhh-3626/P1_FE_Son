import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch, type RootState } from '../../../../redux/store';
import { fetchReviewsByProductId } from '../../../../redux/features/reviewSlice';
import PaginationNav from '../../../../components/common/PaginationNav';
import ReviewItem from './ReviewItem';
import { type Product } from '../../../../types/Product';
import {
  REVIEWS_PER_PAGE_DEFAULT
} from '../../../../constants/reviewsPerPageConstants';

interface ProductTabsProps {
  product: Product;
}

export default function ProductTabs({ product }: ProductTabsProps) {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'description' | 'reviews'>('description');
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = REVIEWS_PER_PAGE_DEFAULT;

  const dispatch = useAppDispatch();
  const { items: reviews, status, error } = useSelector((state: RootState) => state.reviews);

  useEffect(() => {
    if (activeTab === 'reviews' && product?.id) {
      dispatch(fetchReviewsByProductId(product.id));
    }
  }, [activeTab, product?.id, dispatch]);

  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="mt-8">
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
          {t('product_reviews_tab')} ({reviews.length})
        </button>
      </div>
      <div className="mt-4 p-4 bg-white rounded-lg shadow-sm">
        {activeTab === 'description' && (
          <div>
            <p className="text-gray-700">{product.description}</p>
          </div>
        )}
        {activeTab === 'reviews' && (
          <div>
            {status === 'loading' && <p>{t('loading_reviews')}</p>}
            {status === 'failed' && <p className="text-red-500">{t('error_reviews', { error })}</p>}
            {status === 'succeeded' && reviews.length === 0 && <p>{t('no_reviews_yet')}</p>}
            {status === 'succeeded' && reviews.length > 0 && (
              <div>
                {currentReviews.map((review) => (
                  <ReviewItem key={review.id} review={review} />
                ))}
                {totalPages > 1 && (
                  <PaginationNav
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
