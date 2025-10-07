import { memo } from 'react';
import styles from './PaymentIcons.module.css';

const DEFAULT_PAYMENT_ICONS = [
  '/visa.svg',
  '/master-card.svg',
  '/paypal.svg',
  '/skrill.svg',
  '/klanar.svg',
];

function PaymentIcons() {
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

export default memo(PaymentIcons);
