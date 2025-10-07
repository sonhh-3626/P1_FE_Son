import { memo } from 'react';
import { FiPhone, FiMail } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

import styles from './ContactInfo.module.css';

const CONTACT_INFO = {
  phoneNumber: '0 800 300-353',
  email: 'info@example.com',
};

function ContactInfo() {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{t('footer.contactInfo.helpTitle')}</h3>

      <p className={styles.description}>{t('footer.contactInfo.helpDescription')}</p>

      <div className={styles.contactRow}>
        <FiPhone className={styles.icon} />
        <div className={styles.textGroup}>
          <p className={styles.label}>{t('footer.contactInfo.workingHoursValue')}</p>
          <p className={styles.valuePhone}>{CONTACT_INFO.phoneNumber}</p>
        </div>
      </div>

      <div className={styles.contactRow}>
        <FiMail className={styles.icon} />
        <div className={styles.textGroup}>
          <p className={styles.label}>{t('footer.contactInfo.orderHelpLabel')}</p>
          <p className={styles.valueEmail}>{CONTACT_INFO.email}</p>
        </div>
      </div>
    </div>
  );
};

export default memo(ContactInfo);
