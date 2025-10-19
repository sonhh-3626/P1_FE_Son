import { type Review } from '../../../../types/Review';
import Rating from '../../../common/Rating';

interface ReviewItemProps {
  review: Review;
}

export default function ReviewItem({ review }: ReviewItemProps) {
  return (
    <div className="border-b border-gray-200 py-4 last:border-b-0">
      <div className="flex items-center mb-2">
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-lg font-semibold mr-3">
          {review.userName.charAt(0).toUpperCase()}
        </div>
        <div>
          <div className="font-semibold text-gray-800">{review.userName}</div>
          {review.featured && (
            <span className="text-xs text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full">
              Featured
            </span>
          )}
        </div>
      </div>
      <div className="flex items-center mb-2">
        <Rating rating={review.rating} />
        <span className="ml-2 text-sm text-gray-600">({review.rating})</span>
        <span className="ml-2 text-sm text-gray-600">{review.date}</span>
      </div>
      <p className="text-gray-700">{review.comment}</p>
    </div>
  );
}
