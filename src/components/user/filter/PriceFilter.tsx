import { useState, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import PriceInputRange from './PriceInputRange';
import PriceSlider from './PriceSlider';
import Button from '../../common/Button';
import { DEFAULT_MAX_LIMIT, DEFAULT_MIN_PRICE } from '../../../constants/priceConstants';

interface PriceFilterProps {
  onApplyFilter: (min: number, max: number) => void;
  maxLimit?: number;
}

export default function PriceFilter({
  onApplyFilter,
  maxLimit = DEFAULT_MAX_LIMIT,
}: PriceFilterProps) {
  const [minPrice, setMinPrice] = useState(DEFAULT_MIN_PRICE);
  const [maxPrice, setMaxPrice] = useState(maxLimit);
  const { t } = useTranslation();

  const handleMinPriceChange = useCallback(
    (value: number) => {
      const newMin = Math.min(value, maxPrice);
      setMinPrice(newMin);
    },
    [maxPrice],
  );

  const handleMaxPriceChange = useCallback(
    (value: number) => {
      const newMax = Math.max(value, minPrice);
      setMaxPrice(newMax);
    },
    [minPrice],
  );

  const handleRangeChange = useCallback((newRange: [number, number]) => {
    const [newMin, newMax] = newRange;
    setMinPrice(newMin);
    setMaxPrice(newMax);
  }, []);

  const handleFilterClick = useCallback(() => {
    onApplyFilter(minPrice, maxPrice);
  }, [onApplyFilter, minPrice, maxPrice]);

  const hasError = useMemo(() => minPrice > maxPrice, [minPrice, maxPrice]);

  return (
    <div className="max-w-sm mx-auto pr-5 bg-white">
      <div className="text-lg font-bold mb-3 text-gray-900">{t('widget_price_filter')}</div>

      <PriceInputRange
        minPrice={minPrice}
        maxPrice={maxPrice}
        onMinChange={handleMinPriceChange}
        onMaxChange={handleMaxPriceChange}
        upperLimit={maxLimit}
      />

      <PriceSlider
        min={DEFAULT_MIN_PRICE}
        max={maxLimit}
        currentRange={[minPrice, maxPrice]}
        onRangeChange={handleRangeChange}
        unit="$"
      />

      <div className="flex justify-between">
        <div className="text-sm text-gray-800 mt-3 mb-4">
          Price: ${minPrice} — ${maxPrice}
        </div>

        <Button
          onClick={handleFilterClick}
          disabled={hasError}
          className={`p-1 rounded-lg border border-gray-300`}
        >
          Filter
        </Button>
      </div>
    </div>
  );
}
