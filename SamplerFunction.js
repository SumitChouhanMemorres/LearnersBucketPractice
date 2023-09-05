// function sampler(message, count) {
//   let start = 1;
//   return function () {
//     if (start === count) {
//       console.log(message);
//       start = 1;
//     }
//     start++;
//   };
// }

function sampler(callback, count = 1) {
  let track = 1;
  return function (...args) {
    track++;
    if (track === count) {
      callback(...args);
      track = 0;
    }
  };
}

function message() {
  console.log("message");
}

const sample = sampler(message, 3);
sample();
sample();
sample();
