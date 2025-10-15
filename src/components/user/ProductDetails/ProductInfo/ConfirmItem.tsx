import React from 'react';
import { FaCreditCard, FaShieldAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const ConfirmItem: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white rounded-lg border-1 border-[#E5E7EB] shadow-sm p-2 my-5">
      <div className="flex items-start py-3 border-b border-gray-200">
        <FaCreditCard className="text-gray-500 text-2xl mr-8 mt-2 ml-4" />
        <div>
          <h3 className="font-bold text-gray-800 text-lg">{t('confirmItem.paymentTitle')}</h3>
          <p className="text-gray-600 text-sm">
            {t('confirmItem.paymentDescription')}
          </p>
        </div>
      </div>

      <div className="flex items-start py-3">
        <FaShieldAlt className="text-gray-500 text-2xl mr-8 mt-2 ml-4" />
        <div>
          <h3 className="font-bold text-gray-800 text-lg">{t('confirmItem.warrantyTitle')}</h3>
          <p className="text-gray-600 text-sm">
            {t('confirmItem.warrantyDescription')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmItem;
