import React, { useRef, useState, useEffect } from "react";
import "./styles.css";

//The css is same as previous javascript question

const useOnScreen = (ref) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observer = new IntersectionObserver(
    ([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    },
    {
      threshold: 1.0,
    }
  );
  useEffect(() => {
    observer.observe(ref.current);
    return () => observer.unobserve(ref.current);
  }, []);
  return isIntersecting;
};

const Element = ({ index }) => {
  const ref = useRef();
  const isInViewPort = useOnScreen(ref);
  if (isInViewPort) {
    console.log(index);
  }
  return (
    <div ref={ref} className="blocks" key={index}>
      {index}
    </div>
  );
};

const App = () => {
  const blocks = [];
  for (let i = 0; i < 20; i++) {
    blocks.push(<Element index={i + 1} />);
  }
  return <div className="wrapper">{blocks}</div>;
};

export default App;
