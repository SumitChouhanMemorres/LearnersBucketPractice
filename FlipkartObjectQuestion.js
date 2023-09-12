const obj = {
  a: {
    b: (a, b, c) => a + b + c,
    c: (a, b, c) => a + b - c,
  },
  d: (a, b, c) => a - b - c,
};

// Fn(obj)(1, 1, 1);

// output => {
//     a: {
//         b: 3,
//         c: 1,
//     },
//     d: -1
// }

//The question that should be asked should be can the object contain truthy values and second should be should be do mutuation in place or not

function Fn(obj) {
  return function (...args) {
    for (let key in obj) {
      const val = obj[key];
      if (typeof val === "function") {
        obj[key] = val(...args);
      }
      //this check is for truthy values
      else if (val && typeof val === "object" && !Array.isArray()) {
        Fn(val)(...args);
      }
    }
  };
}

Fn(obj)(1, 1, 1);

console.log(obj);
