//Curry Function 1st part

// let curry = () => {
//   let total = 0;
//   return function (num = 0) {
//     total += num;
//     return total;
//   };
// };

// let sum = curry();
// sum(5);
// sum(3);
// sum(4);
// sum(6);

//Curry Function 2nd Part

// const sum = (...args) => {
//   let storage = [...args];
//   if (args.length === 0) {
//     return 0;
//   }
//   const temp = function (...args2) {
//     storage.push(...args2);
//     if (args2.length === 0) {
//       return storage.reduce((a, b) => a + b, 0);
//     } else {
//       return temp;
//     }
//   };
//   return temp;
// };

// let total = sum(10)(20)(30)();
// console.log(total);

//Curry Function 3rd Part

// let curry = (fn) => {
//   let helper = (...args) => {
//     if (args.length >= fn.length) {
//       return fn(...args);
//     } else {
//       let temp = (...args2) => {
//         console.log([...args, ...args2]);
//         return helper(...args, ...args2);
//       };
//       console.log(temp);
//       return temp;
//     }
//   };
//   return helper;
// };

// function sum(a, b, c, d, e) {
//   return a + b + c + d + e;
// }

// let curriedSum = curry(sum);

// console.log(curriedSum(1, 2, 3, 4, 5));
// console.log(curriedSum(1)(2, 3)(4, 5));
// console.log(curriedSum(1)(2)(3)(4)(5));

//Curry Function 4th Part

function add(...args) {
  const storage = [...args];
  function helper(...args2) {
    storage.push(...args2);
    return helper;
  }
  helper.valueOf = function () {
    const sum = storage.reduce((a, b) => a + b, 0);
    return sum;
  };

  helper.value = helper.valueOf;

  this.value = helper.valueOf;

  return helper;
}

console.log(add(1, 2, 3).value() === 6); //true
console.log(add(1, 2)(3).value() === 6); //true
console.log(add(1)(2)(3).value() === 6); //true
console.log(add(1)(2) + 3); //6
