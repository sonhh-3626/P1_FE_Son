import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { currencyService, useSelectedCurrency } from "../../../../services/currencyService";

import styles from './NewsletterInfo.module.css';

export default function NewsletterInfo() {
  const { t } = useTranslation();
  const selectedCurrency = useSelectedCurrency();

  const originalDiscountValue = 10;
  const originalDiscountCurrency = 'EUR';

  const formattedDiscount = useMemo(() => {
    const convertedDiscount = currencyService.convertPrice(
      originalDiscountValue,
      originalDiscountCurrency,
      selectedCurrency
    );
    return currencyService.formatPrice(convertedDiscount, selectedCurrency);
  }, [selectedCurrency]);

  return (
    <div className={styles.wrapper}>

      <h2 className={styles.title}>
        {t('footer.newsletter.title', { discount: formattedDiscount })}
      </h2>

      <p className={styles.description}>
        {t('footer.newsletter.description')}
      </p>
    </div>
  )
}
