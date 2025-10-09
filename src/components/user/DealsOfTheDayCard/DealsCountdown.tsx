import TimeBox from '../../common/TimeBox';

interface Props {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  dealEndTime?: Date;
}

export default function DealsCountdown({ days, hours, minutes, seconds, dealEndTime }: Props) {
  if (!dealEndTime || (days === 0 && hours === 0 && minutes === 0 && seconds === 0)) return null;

  return (
    <div className="flex px-2">
      <div className="flex gap-1 text-sm font-semibold text-gray-800 mb-1">
        <TimeBox time={days} />
        <TimeBox time={hours} />
        <TimeBox time={minutes} />
        <span>:</span>
        <TimeBox time={seconds} />
      </div>
      <span className="text-gray-600 item-center ml-5">
        Remains until the end of the offer
      </span>
    </div>
  );
}
