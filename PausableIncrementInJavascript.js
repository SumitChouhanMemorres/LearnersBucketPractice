//Create a pausable auto increment in javascript, which takes an initial value and steps as input and increments the initial value with given steps every second. The increment can be paused and resumed back.

const increment = (initial = 0, steps = 1) => {
  let count = initial;
  let intervalId = null;
  const startTimer = () => {
    if (intervalId === null) {
      //It can be written as if(!intervalId)
      intervalId = setInterval(() => {
        console.log(count);
        count += steps;
      }, 1000);
    }
  };
  const stopTimer = () => {
    clearInterval(intervalId);
    intervalId = null;
  };

  return {
    startTimer,
    stopTimer,
  };
};

let timerObject = increment(100, 1000);
timerObject.startTimer();

setTimeout(() => {
  timerObject.stopTimer();
}, 5000);
