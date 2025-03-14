import React, { useEffect, useState } from "react";

interface propTypes {
  leftDays: number;
}

const CTimer = (props: propTypes) => {
  const { leftDays = 0 } = props;
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: leftDays,
    hours: 24,
    minutes: 59,
    seconds: 60,
  });

  const [days, setDays] = useState(0);

  useEffect(() => {
    startTimer();
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          const newSeconds = prev.seconds - 1;
          const newMinutes = newSeconds < 0 ? prev.minutes - 1 : prev.minutes;
          const newHours = newMinutes < 0 ? prev.hours - 1 : prev.hours;
          const newDays = newHours < 0 ? prev.days - 1 : prev.days;

          if (
            newDays <= 0 &&
            newHours <= 0 &&
            newMinutes <= 0 &&
            newSeconds <= 0
          ) {
            setIsRunning(false);
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
          }

          return {
            days: newDays < 0 ? 0 : newDays,
            hours: newHours < 0 ? 23 : newMinutes < 0 ? newHours : newHours,
            minutes:
              newMinutes < 0 ? 59 : newSeconds < 0 ? newMinutes : newMinutes,
            seconds: newSeconds < 0 ? 59 : newSeconds,
          };
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const startTimer = () => {
    setTimeLeft({
      days: days,
      hours: 24,
      minutes: 59,
      seconds: 60,
    });
    setIsRunning(true);
  };

  const formatNumber = (num) => {
    return num.toString().padStart(2, "0");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative">
        <div className="relative flex items-center space-x-2 p-4 text-[22px] font-bold">
          <div className="w-10  text-center">
            <div className="text-black">{formatNumber(timeLeft.days)}</div>
            <div className="text-sm text-gray-600 mt-1">Days</div>
          </div>

          <div className="text-red-500 -mt-6">:</div>

          {/* Hours */}
          <div className="w-10 text-center">
            <div className="text-black">{formatNumber(timeLeft.hours)}</div>
            <div className="text-sm text-gray-600 mt-1">Hours</div>
          </div>

          <div className="text-red-500 -mt-6">:</div>

          {/* Minutes */}
          <div className="w-10 text-center">
            <div className="text-black">{formatNumber(timeLeft.minutes)}</div>
            <div className="text-sm text-gray-600 mt-1">Minutes</div>
          </div>

          <div className="text-red-500 -mt-6">:</div>

          {/* Seconds */}
          <div className="w-10 text-center">
            <div className="text-black">{formatNumber(timeLeft.seconds)}</div>
            <div className="text-sm text-gray-600 mt-1">Seconds</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTimer;
