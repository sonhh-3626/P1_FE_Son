import styles from './ReviewCard.module.css';
import Rating from '../../common/Rating';

interface ReviewCardProps {
  avatarSrc?: string;
  userName: string;
  isFeatured?: boolean;
  rating: number;
  reviewCount: number;
  comment: string;
}

export default function ReviewCard  ({
  avatarSrc,
  userName,
  isFeatured = false,
  rating,
  reviewCount,
  comment,
} : ReviewCardProps) {
  return (
    <div className={styles.reviewCard}>
      <div className={styles.header}>
        <div className={styles.avatarContainer}>
          {avatarSrc ? (
            <img src={avatarSrc} alt={`${userName}'s avatar`} className={styles.avatar} />
          ) : (
            <div className={styles.avatarPlaceholder}></div>
          )}
        </div>
        <div className={styles.userInfo}>
          <h3 className={styles.userName}>{userName}</h3>
          {isFeatured && <span className={styles.featuredTag}>Featured</span>}
          <div className={styles.ratingSection}>
            <Rating rating={rating} />
            <span className={styles.reviewCount}>{reviewCount}</span>
          </div>
        </div>
      </div>
      <hr className={styles.divider} />
      <p className={styles.comment}>{comment}</p>
    </div>
  );
};
