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
    errorMessage = `${isMinInput ? 'Min' : 'Max'} price must be ≥ 0.`;
  }

  else if (value > upperLimit) {
    value = upperLimit;
    errorMessage = `${isMinInput ? 'Min' : 'Max'} price cannot exceed max limit (${upperLimit}).`;
  }

  else if (isMinInput) {
    if (value > otherValue) {
      value = otherValue;
      errorMessage = 'Min price cannot be greater than max price.';
    }
  } else {
    if (value < otherValue) {
      value = otherValue;
      errorMessage = 'Max price cannot be less than min price.';
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
