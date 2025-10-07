import { useTranslation } from 'react-i18next';

export default function CopyRight() {
  const { t } = useTranslation();
  return (
    <p>{t('footer.copyright')}</p>
  );
}
