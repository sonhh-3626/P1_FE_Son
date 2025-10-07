import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import Badge from '../common/Badge';
import BannerCTA from './BannerCTA';

import styles from './BannerContent.module.css';

interface BannerContentProps {
  badgeText: string;
  title: string;
  description: string;
  currentPrice: number;
  originalPrice: number;
  onShopNowClick?: () => void;
}

const BannerContent = ({
  badgeText,
  title,
  description,
  currentPrice,
  originalPrice,
  onShopNowClick,
} : BannerContentProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <Badge text={t(badgeText)} gradient="linear-gradient(90deg, rgba(22, 163, 74, 0.5) 0%, rgba(34, 197, 94, 0) 60%)" textColor="green-badge" />

      <h1 className={styles.title}>{t(title)}</h1>
      <p className={styles.description}>{t(description)}</p>
      <BannerCTA
        currentPrice={currentPrice}
        originalPrice={originalPrice}
        onShopNowClick={onShopNowClick}
      />
    </div>
  );
};

export default memo(BannerContent);
