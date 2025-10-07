import { useMemo, useCallback, memo } from 'react';
import DropdownToggle from '../../../common/DropdownToggle';
import ToggleItem from '../../../common/ToggleItem';
import { useTranslation } from 'react-i18next';
import { currencyService, useSelectedCurrency } from '../../../../services/currencyService';

const CURRENCIES = [
    { code: 'USD', nameKey: 'usd' },
    { code: 'EUR', nameKey: 'eur' },
    { code: 'VND', nameKey: 'vnd' },
] as const;

type CurrencyCode = (typeof CURRENCIES)[number]['code'];

function CurrencySwitcher() {
    const { t } = useTranslation();
    const selectedCurrency = useSelectedCurrency();

    const handleCurrencySelect = useCallback((code: CurrencyCode) => {
        currencyService.setCurrency(code);
    }, []);

    const currentCurrencyLabel = useMemo(() => {
        const currentCurrencyNameKey = CURRENCIES.find(currency => currency.code === selectedCurrency)?.nameKey;
        return t(currentCurrencyNameKey || 'usd');
    }, [selectedCurrency]);

    return (
        <DropdownToggle label={currentCurrencyLabel}>
            {CURRENCIES.map((currency) => (
                <ToggleItem
                    key={currency.code}
                    label={t(currency.nameKey)}
                    onClick={() => handleCurrencySelect(currency.code)}
                />
            ))}
        </DropdownToggle>
    );
}

export default memo(CurrencySwitcher);
