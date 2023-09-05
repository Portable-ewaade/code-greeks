import React, { useState } from 'react';
import CountdownTimer from './CountdownTimer';

const MyTimer = () => {
const [expiryTime, setExpiryTime] = useState("30 Sep 2023 15:00:00");
// const [countdownTime, setCountdownTime] = useState({
//   countdownDays: "",
//   countdownHours: "",
//   countdownMinutes: "",
//   countdownSeconds: "",
// });


// const countdownTimer = () => {
//   const timeInterval = setInterval(() => {
//     const countdownDateTime = new Date(expiryTime).getTime();
//     const currentTime = new Date().getTime();
//     const remainingDayTime = countdownDateTime - currentTime;
//     const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
//     const totalHours = Math.floor((remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const totalMinutes = Math.floor((remainingDayTime % (1000 * 60 * 60)) / (1000 * 60));
//     const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);

//     const runningCountdownTime = {
//       countdownDays: totalDays,
//       countdownHours: totalHours,
//       countdownMinutes: totalMinutes,
//       countdownSeconds: totalSeconds,
//     };

//     setCountdownTime(runningCountdownTime);

//     if (remainingDayTime < 0) {
//       clearInterval(timeInterval);
//       setExpiryTime(false);
//       setCountdownTime ({
//        countdownDays: "",
//        countdownHours: "",
//        countdownMinutes: "",
//        countdownSeconds: "",
//      });
//     }
//   }, 1000);

// };



  return (
    <div>
    <CountdownTimer targetDate={expiryTime} />
  </div>
  );
 }
export default MyTimer;
