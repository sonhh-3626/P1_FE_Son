import { useTranslation } from 'react-i18next';

export default function PaymentMethods() {
  const { t } = useTranslation();
  return (
              <div className="mb-4">
            <div className="flex items-center mb-2">
              <input type="radio" name="payment_method" id="direct_bank_transfer" className="mr-2" defaultChecked />
              <label htmlFor="direct_bank_transfer" className="font-medium text-gray-700">{t('paymentMethods.directBankTransfer')}</label>
            </div>
            <p className="text-sm text-gray-600 ml-6 mb-4">
              {t('paymentMethods.directBankTransferDescription')}
            </p>

            <div className="flex items-center mb-2">
              <input type="radio" name="payment_method" id="check_payments" className="mr-2" />
              <label htmlFor="check_payments" className="font-medium text-gray-700">{t('paymentMethods.checkPayments')}</label>
            </div>

            <div className="flex items-center mb-4">
              <input type="radio" name="payment_method" id="cash_on_delivery" className="mr-2" />
              <label htmlFor="cash_on_delivery" className="font-medium text-gray-700">{t('paymentMethods.cashOnDelivery')}</label>
            </div>
          </div>

  )
}
