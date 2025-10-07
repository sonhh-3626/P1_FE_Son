import { useTranslation } from 'react-i18next';
import Button from '../common/Button';
import DiscountPrice from '../common/DiscountPrice';

interface BannerCTAProps {
  onShopNowClick?: () => void;
  currentPrice: number;
  originalPrice: number;
}

const BannerCTA = ({
    onShopNowClick,
    currentPrice,
    originalPrice
  }: BannerCTAProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center mt-8">
      <Button onClick={onShopNowClick} className="mr-4">
        {t('shop_now')}
      </Button>
      <div>
        <DiscountPrice
          currentPrice={currentPrice}
          originalPrice={originalPrice}
        />
        <p className="text-sm text-gray-500 mt-1">{t('limited_time_offer')}</p>
      </div>
    </div>
  );
};

export default BannerCTA;
