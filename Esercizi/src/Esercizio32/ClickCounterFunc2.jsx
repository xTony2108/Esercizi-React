import { useEffect, useState } from "react";

export const ClickCounterFunc2 = ({ onCounterChange }) => {
  const [count, setCount] = useState(0);

  const handleButtonIncrement = () => {
    setCount((count) => (count += 1));
  };

  useEffect(() => {
    onCounterChange(count);
  }, [count]);

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={handleButtonIncrement}>Increment</button>
    </div>
  );
};
