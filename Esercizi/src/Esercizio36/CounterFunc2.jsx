import { useCounter } from "./useCounter";

export const CounterFunc2 = () => {
  const {
    count,
    handleIncrementButton,
    handleDecrementButton,
    handleResetButton,
  } = useCounter(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrementButton}>Increment</button>
      <button onClick={handleDecrementButton}>Decrement</button>
      <button onClick={handleResetButton}>Reset</button>
    </div>
  );
};
