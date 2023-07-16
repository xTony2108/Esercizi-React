import React, { useState } from "react";

export const useCounter = (InitialValue = 0) => {
  const [count, setCount] = useState(InitialValue);

  const handleIncrementButton = () => {
    setCount((count) => {
      return (count += 1);
    });
  };

  const handleDecrementButton = () => {
    setCount((count) => {
      return count === 0 ? 0 : (count -= 1);
    });
  };

  const handleResetButton = () => {
    setCount(InitialValue);
  };

  return {
    count,
    handleIncrementButton,
    handleDecrementButton,
    handleResetButton,
  };
};
