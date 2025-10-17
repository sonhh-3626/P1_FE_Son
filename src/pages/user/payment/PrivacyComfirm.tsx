import { useTranslation } from 'react-i18next';

export default function PrivacyComfirm() {
  const { t } = useTranslation();
  return (
    <div>
      <p className="text-xs text-gray-600 mb-4">
        {t('privacyConfirm.personalData')} <a href="#" className="text-blue-600 hover:underline">{t('privacyConfirm.privacyPolicy')}</a>.
      </p>

      <div className="flex items-center mb-6">
        <input type="checkbox" id="terms_conditions" className="mr-2" />
        <label htmlFor="terms_conditions" className="text-sm text-gray-700">{t('privacyConfirm.agreeTerms')} <a href="#" className="text-blue-600 hover:underline">{t('privacyConfirm.termsAndConditions')}</a> <span className="text-red-500">*</span></label>
      </div>
    </div>
  )
}
