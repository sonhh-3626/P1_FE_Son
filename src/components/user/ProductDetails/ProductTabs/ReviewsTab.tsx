import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch, type RootState } from '../../../../redux/store';
import { fetchReviewsByProductId } from '../../../../redux/features/reviewSlice';
import PaginationNav from '../../../../components/common/PaginationNav';
import ReviewItem from './ReviewItem';

interface ReviewsTabProps {
  productId: number;
}

export default function ReviewsTab({ productId }: ReviewsTabProps) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { items: reviews, status, error } = useSelector((state: RootState) => state.reviews);
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 5;

  useEffect(() => {
    dispatch(fetchReviewsByProductId(productId));
  }, [dispatch, productId]);

  console.log(reviews)
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  const handlePageChange = (page: number) => setCurrentPage(page);

  if (status === 'loading') return <p>{t('loading_reviews')}</p>;
  if (status === 'failed') return <p className="text-red-500">{t('error_reviews', { error })}</p>;
  if (status === 'succeeded' && reviews.length === 0) return <p>{t('no_reviews_yet')}</p>;

  return (
    <div>
      {currentReviews.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
      {totalPages > 1 && (
        <PaginationNav currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      )}
    </div>
  );
}
