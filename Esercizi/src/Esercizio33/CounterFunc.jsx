import React, { useEffect, useState } from "react";

export const CounterFunc = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeout = setInterval(() => {
      setCount((count) => (count += 1));
    }, 1000);
    return () => {
      clearInterval(timeout);
    };
  }, []);

  return (
    <div>
      <span>Count: {count}</span>
    </div>
  );
};
