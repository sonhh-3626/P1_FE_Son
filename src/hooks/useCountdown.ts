import { useState, useEffect } from 'react';

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (endTime: Date): Countdown => {
  const difference = +endTime - +new Date();
  let timeLeft: Countdown = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

export const useCountdown = (dealEndTime?: Date) => {
  const [timeLeft, setTimeLeft] = useState<Countdown>(
    dealEndTime ? calculateTimeLeft(dealEndTime) : { days: 0, hours: 0, minutes: 0, seconds: 0 }
  );

  useEffect(() => {
    if (!dealEndTime) {
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(dealEndTime));
    }, 1000);

    return () => clearInterval(timer);
  }, [dealEndTime]);

  return timeLeft;
};
