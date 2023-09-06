//This is the first solution
// import React, { useState, useRef } from "react";

// const IncrementCounter = () => {
//   const [counterValue, setCounterValue] = useState(0);
//   const timerIdRef = useRef(null);
//   const startCounter = () => {
//     timerIdRef.current = setInterval(() => {
//       setCounterValue((counterValue) => counterValue + 1);
//     }, 1000);
//   };
//   const stopCounter = () => {
//     clearInterval(timerIdRef.current);
//   };
//   return (
//     <>
//       <h1>{counterValue}</h1>
//       <button onClick={startCounter}>Start</button>
//       <button onClick={stopCounter}>Stop</button>
//     </>
//   );
// };

// export default IncrementCounter;

//This is the second solution
import React, { useState, useRef, useEffect } from "react";

const IncrementCounter = () => {
  const [counterValue, setCounterValue] = useState(0);
  const [start, setStart] = useState(false);
  const timerIdRef = useRef(null);

  useEffect(() => {
    if (start) {
      timerIdRef.current = setTimeout(() => {
        setCounterValue(counterValue + 1);
      }, 1000);
    }
    return () => {
      clearTimeout(timerIdRef.current);
    };
  }, [start, counterValue]);

  const startCounter = () => {
    setStart(true);
  };
  const stopCounter = () => {
    clearTimeout(timerIdRef.current);
    setStart(false);
  };
  return (
    <>
      <h1>{counterValue}</h1>
      <button onClick={startCounter}>Start</button>
      <button onClick={stopCounter}>Stop</button>
    </>
  );
};

export default IncrementCounter;
