import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';
import styles from './ShoppingCartIcon.module.css';
import { type RootState } from '../../../../redux/store';

export default function ShoppingCartIcon() {
  const navigate = useNavigate();
  const totalUniqueProducts = useSelector((state: RootState) => state.cart.items.length);

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
        {totalUniqueProducts > 99 ? '99+' : totalUniqueProducts}
      </span>
    </div>
  )
}
