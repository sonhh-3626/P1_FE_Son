import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaRegUserCircle } from 'react-icons/fa';

import styles from './Account.module.css';

export default function Account() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleAccountClick = () => {
    navigate('/login');
  }

  return (
    <div className={styles.accountContainer} onClick={handleAccountClick}>
      <FaRegUserCircle className={styles.icon} />

      <div className={styles.textGroup}>
        <span className={styles.signInText}>{t("sign_in")}</span>
        <span className={styles.accountText}>{t("account")}</span>
      </div>
    </div>
  )
}
