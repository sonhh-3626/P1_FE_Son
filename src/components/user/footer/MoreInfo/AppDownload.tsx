import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './AppDownload.module.css';

function AppDownload() {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{t('footer.appDownload.title')}</h3>
      <a href="#" className={styles.downloadLink}>
        <img
          src="/google-play-badge.svg"
          alt="Get it on Google Play"
          className={styles.downloadBadge}
        />
        <span className={styles.discountText}>{t('footer.appDownload.googlePlayDiscount')}</span>
      </a>

      <a href="#" className={styles.downloadLink}>
        <img
          src="/app-store-badge.svg"
          alt="Download on the App Store"
          className={styles.downloadBadge}
        />
        <span className={styles.discountText}>{t('footer.appDownload.appStoreDiscount')}</span>
      </a>
    </div>
  );
};

export default memo(AppDownload);
