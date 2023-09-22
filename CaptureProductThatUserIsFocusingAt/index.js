//If user stops scrolling then we need to capture the event -> debounced scroll Event
//Detect html element that are in view port

const inViewPort = (elm) => {
  const elmDim = elm.getBoundingClientRect();
  const viewHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const viewWidth = window.innerWidth || document.documentElement.clientWidth;
  return (
    elmDim.top >= 0 &&
    elmDim.left >= 0 &&
    elmDim.right <= viewWidth &&
    elmDim.bottom <= viewHeight
  );
};

const detect = () => {
  const result = [];
  const blocks = document.querySelectorAll(".blocks");
  blocks.forEach((block) => {
    if (inViewPort(block)) {
      result.push(block.textContent);
    }
  });
  console.log(result);
};

const debounce = (func, delay) => {
  let inDebounce;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(context, args), delay);
  };
};

const debouncedDetect = debounce(detect, 1000);

window.addEventListener("scroll", debouncedDetect);
