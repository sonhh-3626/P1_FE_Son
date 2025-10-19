import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaRegHeart } from 'react-icons/fa';

import styles from './LikedIcon.module.css';
import { type RootState } from '../../../../redux/store';

export default function LikedIcon() {
  const navigate = useNavigate();
  const likedProductsCount = useSelector((state: RootState) =>
    state.products.items.filter(product => product.loved).length
  );

  const handleClick = () => {
    navigate('/liked-lists');
  };

  return (
    <div className={styles.iconWrapper} onClick={handleClick}>
      <FaRegHeart size={24} className="text-gray-800" />
      <span className={styles.badge}>
        {likedProductsCount > 10 ? '10+' : likedProductsCount}
      </span>
    </div>
  )
}
