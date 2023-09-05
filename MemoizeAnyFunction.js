//Memorization only works for the Pure Function and what are Pure Functions :- These are the functions that doesn't has any side effects

let memoize = (fn) => {
  let cache = {};
  console.log(cache);
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    const evaluatedValue = fn(...args);
    cache[key] = evaluatedValue;
    return evaluatedValue;
  };
};

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return factorial(n - 1) * n;
}
let memoizedFactorial = memoize(factorial);
console.log(memoizedFactorial(105));
console.log(memoizedFactorial(105));
