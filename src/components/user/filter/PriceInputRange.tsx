import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { validatePriceInput } from '../../../utils/priceValidationUtils';

interface PriceInputRangeProps {
  minPrice: number;
  maxPrice: number;
  onMinChange: (value: number) => void;
  onMaxChange: (value: number) => void;
  upperLimit?: number;
}

export default function PriceInputRange({
  minPrice,
  maxPrice,
  onMinChange,
  onMaxChange,
  upperLimit = 99999,
}: PriceInputRangeProps) {
  const [minInput, setMinInput] = useState(minPrice.toString());
  const [maxInput, setMaxInput] = useState(maxPrice.toString());
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => setMinInput(minPrice.toString()), [minPrice]);
  useEffect(() => setMaxInput(maxPrice.toString()), [maxPrice]);

  const handleMinInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setMinInput(e.target.value);
    setErrorMessage(null);
  }, []);

  const handleMaxInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxInput(e.target.value);
    setErrorMessage(null);
  }, []);

  const handleMinInputBlur = useCallback(() => {
    const { cleanedValue, errorMessage: newError } = validatePriceInput(
      minInput,
      minPrice,
      maxPrice,
      upperLimit,
      true
    );

    setErrorMessage(newError);
    setMinInput(cleanedValue.toString());

    if (cleanedValue !== minPrice) {
      onMinChange(cleanedValue);
    }
  }, [minInput, minPrice, maxPrice, upperLimit, onMinChange]);

  const handleMaxInputBlur = useCallback(() => {
    const { cleanedValue, errorMessage: newError } = validatePriceInput(
      maxInput,
      maxPrice,
      minPrice,
      upperLimit,
      false
    );

    setErrorMessage(newError);
    setMaxInput(cleanedValue.toString());

    if (cleanedValue !== maxPrice) {
      onMaxChange(cleanedValue);
    }
  }, [maxInput, maxPrice, minPrice, upperLimit, onMaxChange]);

  const hasError = useMemo(() => !!errorMessage, [errorMessage]);

  return (
    <div className="flex flex-col gap-3 mb-4">
      <div className="flex items-end justify-center gap-2">
        <div className="flex flex-col flex-1">
          <label htmlFor="minPrice" className="text-xs font-medium text-gray-600 mb-1">
            Min price
          </label>
          <input
            id="minPrice"
            type="number"
            value={minInput}
            onChange={handleMinInputChange}
            onBlur={handleMinInputBlur}
            className={`w-full px-2 py-1.5 border rounded-md text-sm text-center
              ${hasError ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-gray-400'}
              focus:outline-none focus:ring-1`}
            min="0"
          />
        </div>

        <span className="text-gray-500 text-sm mb-1">-</span>

        <div className="flex flex-col flex-1">
          <label htmlFor="maxPrice" className="text-xs font-medium text-gray-600 mb-1">
            Max price
          </label>
          <input
            id="maxPrice"
            type="number"
            value={maxInput}
            onChange={handleMaxInputChange}
            onBlur={handleMaxInputBlur}
            className={`w-full px-2 py-1.5 border rounded-md text-sm text-center
              ${hasError ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-gray-400'}
              focus:outline-none focus:ring-1`}
          />
        </div>
      </div>

      {hasError && (
        <p className="text-xs text-red-500 mt-1">{errorMessage}</p>
      )}
    </div>
  );
}
