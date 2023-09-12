let testPromise = () => {
  let count = 0;
  return function () {
    return new Promise((resolve, reject) => {
      count += 1;
      if (count <= 5) {
        reject("Failed API");
      } else {
        resolve("Succesful");
      }
    });
  };
};

//This is with .then method
// const retry = (fn, retries, finalError) => {
//   return new Promise((resolve, reject) => {
//     fn().then(resolve, (err) => {
//       if (retries === 1) {
//         reject(finalError);
//       }
//       retry(fn, retries - 1, finalError).then(resolve, reject);
//     });
//   });
// };

//This is with async await
const retry = async (fn, retries, finalError) => {
  try {
    const response = await fn();
    return response;
  } catch (e) {
    if (retries === 1) {
      return Promise.reject(finalError);
    }
  }
  return retry(fn, retries - 1, finalError);
};

retry(testPromise(), 5, "Final Failure error").then(
  (val) => {
    console.log(val);
  },
  (err) => {
    console.log(err);
  }
);
