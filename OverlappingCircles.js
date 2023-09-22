import React, { useEffect, useState } from "react";
const Radius = 50;

const App = () => {
  const [circleCord, setCircleCord] = useState([]);
  useEffect(() => {
    document.addEventListener("click", drawCircle);

    return () => document.removeEventListener("click", drawCircle);
  }, []);

  const drawCircle = (e) => {
    const { clientX, clientY } = e;
    // console.log(clientX, clientY);
    const newCircleCord = {
      top: clientY - Radius,
      left: clientX - Radius,
      bottom: clientY + Radius,
      right: clientX + Radius,
      background: "red",
    };
    setCircleCord((prevState) => {
      for (let i = 0; i < prevState.length; i++) {
        const collides = ElementOverlap(newCircleCord, prevState[i]);
        if (collides) {
          newCircleCord.background = "yellow";
          break;
        }
      }
      return [...prevState, newCircleCord];
    });
  };

  const ElementOverlap = (circle1, circle2) => {
    const collides = !(
      circle1.top > circle2.bottom ||
      circle1.right < circle2.left ||
      circle1.bottom < circle2.top ||
      circle1.left > circle2.right
    );
    return collides;
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      {circleCord.map((e) => {
        return <Circle {...e} key={e.top + e.left + e.background} />;
      })}
    </div>
  );
};

const Circle = ({ top, left, background }) => {
  return (
    <div
      style={{
        position: "absolute",
        width: Radius * 2,
        height: Radius * 2,
        borderRadius: "50%",
        top,
        left,
        background,
      }}
    ></div>
  );
};

export default App;
