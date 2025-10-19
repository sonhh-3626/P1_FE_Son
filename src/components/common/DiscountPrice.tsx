import { useSelectedCurrency, currencyService } from '../../services/currencyService';

interface DiscountPriceProps {
  currentPrice: number;
  originalPrice: number;
  baseCurrency?: 'USD' | 'EUR' | 'VND';
  currentPriceClass?: string;
  originalPriceClass?: string;
  className?: string; 
}

const DiscountPrice = ({
  currentPrice,
  originalPrice,
  baseCurrency = 'USD',
  currentPriceClass = 'text-2xl font-bold text-red-600',
  originalPriceClass = 'text-lg text-gray-500 line-through ml-2',
  className = '',
} : DiscountPriceProps) => {
  const selectedCurrency = useSelectedCurrency();

  const convertedCurrentPrice = currencyService.convertPrice(currentPrice, baseCurrency, selectedCurrency);
  const convertedOriginalPrice = currencyService.convertPrice(originalPrice, baseCurrency, selectedCurrency);

  const formattedCurrentPrice = currencyService.formatPrice(convertedCurrentPrice, selectedCurrency);
  const formattedOriginalPrice = currencyService.formatPrice(convertedOriginalPrice, selectedCurrency);

  return (
    <div className={`flex items-baseline ${className}`}>
      <span className={currentPriceClass}>
        {formattedCurrentPrice}
      </span>
      {originalPrice > currentPrice && (
        <span className={originalPriceClass}>
          {formattedOriginalPrice}
        </span>
      )}
    </div>
  );
};

export default DiscountPrice;
