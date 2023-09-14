const helper = (arr) => {
  let index = 0;
  return {
    next: function () {
      return index < arr.length ? arr[index++] : null;
    },
    done: function () {
      return index >= arr.length;
    },
  };
};

let iterator = helper([1, 2, "Hello"]);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.done());
console.log(iterator.next());
console.log(iterator.done());
console.log(iterator.next());
