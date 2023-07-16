import React, { useCallback, useState } from "react";

export const useCounter = (InitialValue = 0) => {
  const [count, setCount] = useState(InitialValue);

  const handleIncrementButton = useCallback(() => {
    setCount((count) => {
      return (count += 1);
    });
  }, []);
  const handleDecrementButton = useCallback(() => {
    setCount((count) => {
      return count === 0 ? 0 : (count -= 1);
    });
  }, []);

  const handleResetButton = useCallback(() => {
    setCount(InitialValue);
  }, []);

  return {
    count,
    handleIncrementButton,
    handleDecrementButton,
    handleResetButton,
  };
};
