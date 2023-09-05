// // import React from "react";
// // import CountdownTimer from "./CountdownTimer";

// // const MyTimer = () => {
// //   // const TWENTYSIX_DAYS_IN_MS = 26 * 24 * 60 * 60 * 1000;
// //   const NOW_IN_MS = new Date().getTime();

// //   // const dateTimeAfterTwentySixDays = NOW_IN_MS + TWENTYSIX_DAYS_IN_MS;

// //   return (
// //     <div>
// //       <CountdownTimer targetDate={dateTimeAfterTwentySixDays} />
// //     </div>
// //   );
// // };
// // export default MyTimer;



// import React, { useEffect, useState } from 'react';
// import CountdownTimer from './CountdownTimer';


// const MyTimer = () => {
//   const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;

//   // Use useState to manage the target date on the client side
//   const [targetDate, setTargetDate] = useState(null);

//   useEffect(() => {
//     // Calculate the target date when the component mounts on the client side
//     const NOW_IN_MS = new Date().getTime();
//     const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

//     // Set the target date in the component's state
//     setTargetDate(dateTimeAfterThreeDays);
//   }, []);

//   return (
//     <div>
//       <h1>Countdown Timer</h1>
//       {targetDate ? (
//         <CountdownTimer targetDate={targetDate} />
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }
// export default MyTimer;

import React, { useEffect, useState } from 'react';
import CountdownTimer from './CountdownTimer';


const MyTimer = () => {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;

  // Use useState to manage the target date on the client side
  const [targetDate, setTargetDate] = useState(null);

  useEffect(() => {
    // Try to retrieve the target date from localStorage
    const storedTargetDate = localStorage.getItem('targetDate');

    if (storedTargetDate) {
      // If a target date is found in localStorage, use it
      setTargetDate(Number(storedTargetDate));
    } else {
      // Calculate the target date when the component mounts on the client side
      const NOW_IN_MS = new Date().getTime();
      const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

      // Set the target date in the component's state
      setTargetDate(dateTimeAfterThreeDays);

      // Store the target date in localStorage for future page reloads
      localStorage.setItem('targetDate', dateTimeAfterThreeDays);
    }
  }, []);

  return (
    <div>
      <h1>Countdown Timer</h1>
      {targetDate ? (
        <CountdownTimer targetDate={targetDate} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default MyTimer;