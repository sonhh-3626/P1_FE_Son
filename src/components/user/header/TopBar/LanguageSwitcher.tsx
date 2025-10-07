import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import DropdownToggle from '../../../common/DropdownToggle';
import ToggleItem from '../../../common/ToggleItem';
import i18n from '../../../../../i18n';

export default function LanguageSwitcher() {
  const { t } = useTranslation();
  const [selectedLanguageCode, setSelectedLanguageCode] = useState(i18n.language.toUpperCase());

  const languages = [
    { code: 'EN', name: 'english' },
    { code: 'VI', name: 'vietnamese' },
  ];

  useEffect(() => {
    setSelectedLanguageCode(i18n.language.toUpperCase());
  }, [i18n.language]);

  const handleLanguageSelect = (code: string) => {
    i18n.changeLanguage(code.toLowerCase());
    setSelectedLanguageCode(code);
  };

  const currentLanguageName = languages.find(lang => lang.code === selectedLanguageCode)?.name;

  return (
    <DropdownToggle label={t(currentLanguageName || 'english')}>
      {languages.map((lang) => (
        <ToggleItem
          key={lang.code}
          label={t(lang.name)}
          onClick={() => handleLanguageSelect(lang.code)}
        />
      ))}
    </DropdownToggle>
  );
}
