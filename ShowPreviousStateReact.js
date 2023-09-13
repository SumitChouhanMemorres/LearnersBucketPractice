import React, { useState, useEffect, useRef } from "react";

const usePrevious = (val) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = val;
  }, [val]);
  return ref.current;
};

export default function ShowPreviousStateReact() {
  const [count, setCount] = useState(0);
  const previousCount = usePrevious(count); //This is a custom hook which will return the previous value based on the current value
  return (
    <div>
      <p>Count: {count}</p>
      <p>Previous Count: {previousCount}</p>
      <button onClick={() => setCount(count + 1)}>UpdateCount</button>
    </div>
  );
}
