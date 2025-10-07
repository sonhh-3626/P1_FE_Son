export const CURRENCIES = [
    { code: 'USD', nameKey: 'usd' },
    { code: 'EUR', nameKey: 'eur' },
    { code: 'VND', nameKey: 'vnd' },
] as const;

export type CurrencyCode = (typeof CURRENCIES)[number]['code'];
