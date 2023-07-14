import React, { useState } from "react";

export const ClickCounterFunc = () => {
  const [count, setCount] = useState(0);

  const handleIncrementButton = () => {
    setCount((count) => {
      return (count += 1);
    });
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrementButton}>Increment</button>
    </div>
  );
};
