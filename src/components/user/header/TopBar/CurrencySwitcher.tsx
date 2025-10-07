import { useMemo, useCallback } from 'react';
import DropdownToggle from '../../../common/DropdownToggle';
import ToggleItem from '../../../common/ToggleItem';
import { useTranslation } from 'react-i18next';
import { currencyService, useSelectedCurrency } from '../../../../services/currencyService';
import { CURRENCIES, type CurrencyCode } from '../../../../constants/currency';

export default function CurrencySwitcher() {
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
