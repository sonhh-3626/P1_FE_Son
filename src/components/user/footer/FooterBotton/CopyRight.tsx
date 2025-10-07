import { memo } from 'react';
import { useTranslation } from 'react-i18next';

function CopyRight() {
  const { t } = useTranslation();
  return (
    <p>{t('footer.copyright')}</p>
  );
}

export default memo(CopyRight);
