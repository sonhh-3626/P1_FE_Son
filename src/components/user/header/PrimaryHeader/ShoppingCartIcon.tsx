import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import styles from './ShoppingCartIcon.module.css';

interface ShoppingCartIconProps {
  count: number;
}

function ShoppingCartIcon({ count }: ShoppingCartIconProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/cart');
  };

  return (
    <div className={styles.iconWrapper} onClick={handleClick}>

      <FaShoppingCart
        size={24}
        className="text-gray-800"
      />

      <span className={styles.badge}>
        {count > 99 ? '99+' : count}
      </span>
    </div>
  )
}

export default memo(ShoppingCartIcon);
