import { useState, useEffect } from 'react';

type CurrencyCode = 'USD' | 'EUR' | 'VND';

interface ExchangeRates {
  [key: string]: {
    [key: string]: number;
  };
}

const exchangeRates: ExchangeRates = {
  USD: {
    USD: 1,
    EUR: 0.93,
    VND: 25450,
  },
  EUR: {
    USD: 1.07,
    EUR: 1,
    VND: 27300,
  },
  VND: {
    USD: 0.000039,
    EUR: 0.000037,
    VND: 1,
  },
};

let currentCurrency: CurrencyCode = (localStorage.getItem('selectedCurrency') as CurrencyCode) || 'USD';
const listeners = new Set<() => void>();

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}

export const currencyService = {
  subscribe(listener: () => void) {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  },
  getSnapshot() {
    return currentCurrency;
  },
  setCurrency(currencyCode: CurrencyCode) {
    currentCurrency = currencyCode;
    localStorage.setItem('selectedCurrency', currencyCode);
    emitChange();
  },
  convertPrice(price: number, fromCurrency: CurrencyCode, toCurrency: CurrencyCode): number {
    if (fromCurrency === toCurrency) {
      return price;
    }
    const rate = exchangeRates[fromCurrency]?.[toCurrency];
    if (rate === undefined) {
      console.warn(`No exchange rate found for ${fromCurrency} to ${toCurrency}`);
      return price;
    }
    return price * rate;
  },
  formatPrice(price: number, currencyCode: CurrencyCode): string {
    switch (currencyCode) {
      case 'USD':
        return `$${price.toFixed(2)}`;
      case 'EUR':
        return `€${price.toFixed(2)}`;
      case 'VND':
        return `${price.toLocaleString('vi-VN')}₫`;
      default:
        return price.toFixed(2);
    }
  }
};

export function useSelectedCurrency() {
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyCode>(currencyService.getSnapshot());

  useEffect(() => {
    const unsubscribe = currencyService.subscribe(() => {
      setSelectedCurrency(currencyService.getSnapshot());
    });
    return unsubscribe;
  }, []);

  return selectedCurrency;
}
