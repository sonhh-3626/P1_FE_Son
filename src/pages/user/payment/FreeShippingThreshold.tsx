import { IoCubeOutline } from "react-icons/io5";
import { useTranslation } from 'react-i18next';

export default function FreeShipingThrehold() {
  const { t } = useTranslation();
  const freeShippingAmount = "$299.11";
  return (
    <div className="bg-[#FFF5F5] border border-[#FCA1A1] p-3 rounded-md flex items-center mb-6">
      <div className="flex flex-grow border-b-3 py-3 mx-5 border-b-[#FEE2E2] font-bold">
        <IoCubeOutline />

        <div className="ml-5">
          {t('freeShippingThreshold.message', { amount: freeShippingAmount })}
        </div>
      </div>

    </div>
  )
}
