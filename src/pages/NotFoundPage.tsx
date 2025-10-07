import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import NotFoundImage from '/404-not-found.svg';
import styles from './NotFoundPage.module.css';

function NotFoundPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleGoHome = () => {
    navigate('/');
  }

  const handleGoBack = () => {
    navigate(-1);
  }

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.contentContainer}>

        <img
          src={NotFoundImage}
          alt="404 Not Found"
          className={styles.image}
        />

        <h1 className={styles.title}>
          {t('notFoundPage.title')}
        </h1>

        <p className={styles.description}>
          {t('notFoundPage.description')}
        </p>

        <div className={styles.buttonGroup}>
          <button
            onClick={handleGoHome}
            className={styles.homeButton}
          >
            {t('notFoundPage.homeButton')}
          </button>
          <button
            onClick={handleGoBack}
            className={styles.backButton}
          >
            {t('notFoundPage.backButton')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(NotFoundPage);
