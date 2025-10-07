import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';

import styles from './LikedIcon.module.css';

interface LikedIconProps {
  count: number;
}

function LikedIcon({ count }: LikedIconProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/liked-lists');
  };

  return (
    <div className={styles.iconWrapper} onClick={handleClick}>
      <FaRegHeart size={24} className="text-gray-800" />
      <span className={styles.badge}>
        {count > 10 ? '10+' : count}
      </span>
    </div>
  )
}

export default memo(LikedIcon);
