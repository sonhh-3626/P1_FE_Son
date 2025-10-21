import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

interface RatingProps {
  rating: number;
  ratingCount?: number;
  className?: string;
}

const renderRating = (rating: number) => {
  const checkedRating = Math.max(0, Math.min(5, rating));

  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = checkedRating - fullStars >= 0.3;

  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    } else if (i === fullStars + 1 && hasHalfStar) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
    }
    else {
      stars.push(<FaRegStar key={i} className="text-gray-300" />);
    }
  }
  return stars;
};

export default function Rating({ rating, ratingCount, className }: RatingProps) {
  return (
    <div className={`flex items-center my-1 ${className}`}>
      {renderRating(rating)}
      {ratingCount && (<span className="text-gray-500 text-sm ml-2">({ratingCount || 1})</span>)}
    </div>

  )
}
