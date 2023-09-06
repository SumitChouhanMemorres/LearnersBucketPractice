const obj = {
  a: 1,
  b: {
    c: 2,
    d: -3,
    e: {
      f: {
        g: -4,
      },
    },
    h: {
      i: 5,
      j: 6,
    },
  },
};

const filterFn = (n) => n >= 0;

const deepFilter = (obj, filterFn) => {
  for (let key in obj) {
    const val = obj[key];
    if (val && typeof val === "object" && !Array.isArray(val)) {
      deepFilter(val, filterFn); //This is the recursion call
    } else {
      if (filterFn(val) === false) {
        delete obj[key];
      }
    }
    if (JSON.stringify(val) === "{}") {
      delete obj[key];
    }
  }
};

deepFilter(obj, filterFn);
console.log(obj);
