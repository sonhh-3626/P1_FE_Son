import FooterBottomLinks from './FooterBottomLinks';
import PaymentIcons from './PaymentIcons';
import CopyRight from './CopyRight';

import styles from './FooterBottom.module.css';

export default function FooterBottom() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentContainer}>
        <div className={styles.topRow}>
          <CopyRight />
          <FooterBottomLinks />
        </div>
        <div className={styles.bottomRow}>
          <PaymentIcons />
        </div>
      </div>
    </div>
  );
};
