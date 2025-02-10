import React, { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const CountDown: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date("2025-02-07") - +new Date();

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const eventTimer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(eventTimer);
  }, []);

  return (
    <div className="w-full flex gap-4 text-white text-center">
      {Object.entries(timeLeft).map(([interval, value]) => (
        <div key={interval} className="flex flex-col items-center">
          <span className="text-2xl font-bold">{value}</span>
          <span className="text-sm">{interval}</span>
        </div>
      ))}
    </div>
  );
};

export default CountDown;

// import React, { useEffect, useState } from "react";

// type TimeLeft = {
//   days: number;
//   hours: number;
//   minutes: number;
//   seconds: number;
// };

// const CountDown: React.FC = () => {
//   const calculateTimeLeft = (): TimeLeft => {
//     // const now = new Date();
//     // const targetDate = new Date("2025-02-07");
//     // const difference = targetDate.getTime() - now.getTime();

//     const difference = +new Date("2025-02-07") - +new Date();

//     if (difference <= 0) {
//       return { days: 0, hours: 0, minutes: 0, seconds: 0 };
//     }

//     return {
//       days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//       hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//       minutes: Math.floor((difference / (1000 * 60)) % 60),
//       seconds: Math.floor((difference / 1000) % 60),
//     };
//   };

//   const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
//   const [timeUp, setTimeUp] = useState(false);

//   useEffect(() => {
//     if (timeUp) return; // Stop if time is already up

//     const eventTimer = setInterval(() => {
//       const newTimeLeft = calculateTimeLeft();
//       setTimeLeft(newTimeLeft);

//       if (
//         newTimeLeft.days === 0 &&
//         newTimeLeft.hours === 0 &&
//         newTimeLeft.minutes === 0 &&
//         newTimeLeft.seconds === 0
//       ) {
//         setTimeUp(true);
//         clearInterval(eventTimer);
//       }
//     }, 1000);

//     return () => clearInterval(eventTimer);
//   }, [timeUp]);

//   return (
//     <div className="w-full flex justify-start items-center text-white text-center">
//       {timeUp ? (
//         <span className="text-2xl font-bold text-red-500">Time's Up!</span>
//       ) : (
//         <div className="flex gap-4">
//           {Object.entries(timeLeft).map(([interval, value]) => (
//             <div key={interval} className="flex flex-col items-center mx-2">
//               <span className="text-2xl font-bold">{value}</span>
//               <span className="text-sm uppercase">{interval}</span>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CountDown;
