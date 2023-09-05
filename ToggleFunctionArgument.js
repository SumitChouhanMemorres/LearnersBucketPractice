const toggle = (...args) => {
  let index = 0;
  return function () {
    if (args.length) {
      console.log(args[index++]);
      if (index >= args.length) {
        index = 0;
      }
    }
  };
};

const onOff = toggle("1", "2", "3", "4");
