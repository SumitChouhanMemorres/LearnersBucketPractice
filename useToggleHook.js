import React, { useState, useCallback } from "react";

const useToggle = (arr, index = 0) => {
  const [currentIndex, setCurrentIndex] = useState(index);
  const toggle = useCallback(() => {
    return setCurrentIndex((prevIndex) =>
      prevIndex >= arr.length - 1 ? 0 : prevIndex + 1
    );
  }, [arr]);

  return [toggle, arr[currentIndex]];
};

const App = () => {
  const [toggle, value] = useToggle([1, 2, 3, 4, 5], 2);
  return (
    <>
      <h1>Current Value: {value}</h1>
      <button onClick={toggle}>Toggle</button>
    </>
  );
};

export default App;
