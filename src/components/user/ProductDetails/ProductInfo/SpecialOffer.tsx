import DealsCountdown from "../../../../components/user/DealsOfTheDayCard/DealsCountdown";
import { useCountdown } from "../../../../hooks/useCountdown";
import { useTranslation } from "react-i18next";

interface SpecialOfferProps {
  dealEndTime: Date;
}

export default function SpecialOffer({ dealEndTime }: SpecialOfferProps) {
  const { days, hours, minutes, seconds } = useCountdown(dealEndTime);
  const { t } = useTranslation();

  return (
    <div className="flex items-center rounded-lg gap-2 text-sm my-4 p-4 bg-[#FFEDD5]">
      <div className="text-[#EA580C] font-bold">
        {t('specialOffer.title')}
      </div>
      <DealsCountdown days={days} hours={hours} minutes={minutes} seconds={seconds} dealEndTime={dealEndTime} />
      <div className="text-gray-600">
        {t('specialOffer.remainingTime')}
      </div>
    </div>
  )
}
