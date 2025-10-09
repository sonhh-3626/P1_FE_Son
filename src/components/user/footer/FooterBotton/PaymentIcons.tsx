import styles from './PaymentIcons.module.css';
import { DEFAULT_PAYMENT_ICONS } from '../../../../constants/footer/paymentIcons';

export default function PaymentIcons() {
  return (
    <div className={styles.paymentIconsContainer}>
      {DEFAULT_PAYMENT_ICONS.map((icon, index) => (
        <img
          key={index}
          src={icon}
          alt="Payment Method"
          className={styles.icon}
        />
      ))}
    </div>
  );
}
