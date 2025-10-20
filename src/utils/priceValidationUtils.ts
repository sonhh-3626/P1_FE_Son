import i18n from 'i18next';

interface ValidationResult {
  cleanedValue: number;
  errorMessage: string | null;
}

export function validatePriceInput(
  inputValue: string,
  currentValue: number,
  otherValue: number,
  upperLimit: number,
  isMinInput: boolean,
): ValidationResult {
  let value = parseInt(inputValue, 10);
  let errorMessage: string | null = null;
  const initialValue = currentValue;

  if (isNaN(value) || value < 0) {
    value = 0;
    errorMessage = i18n.t(isMinInput ? 'price_min_zero_error' : 'price_max_zero_error');
  }

  else if (value > upperLimit) {
    value = upperLimit;
    errorMessage = i18n.t(isMinInput ? 'price_min_upper_limit_error' : 'price_max_upper_limit_error', { upperLimit });
  }

  else if (isMinInput) {
    if (value > otherValue) {
      value = otherValue;
      errorMessage = i18n.t('price_min_greater_than_max_error');
    }
  } else {
    if (value < otherValue) {
      value = otherValue;
      errorMessage = i18n.t('price_max_less_than_min_error');
    }
  }

  if (errorMessage === null) {
      if (isNaN(parseInt(inputValue, 10))) {
          value = initialValue;
      } else {
          value = parseInt(inputValue, 10);
      }
  }

  return {
    cleanedValue: value,
    errorMessage: errorMessage,
  };
}
