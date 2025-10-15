import DealsCountdown from "../../../components/user/DealsOfTheDayCard/DealsCountdown";
import { useCountdown } from "../../../hooks/useCountdown";

interface SpecialOfferProps {
  dealEndTime: Date;
}

export default function SpecialOffer({ dealEndTime }: SpecialOfferProps) {
  const { days, hours, minutes, seconds } = useCountdown(dealEndTime);

  return (
    <div className="flex items-center rounded-lg gap-2 text-sm my-4 p-4 bg-[#FFEDD5]">
      <div className="text-[#EA580C] font-bold">
        Special Offer :
      </div>
      <DealsCountdown days={days} hours={hours} minutes={minutes} seconds={seconds} dealEndTime={dealEndTime} />
      <div className="text-gray-600">
        Remains until the end of the offer.
      </div>
    </div>
  )
}
