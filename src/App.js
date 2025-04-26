import { useState } from 'react';
import './App.css';

function Counter() {
  const [count, setCount] = useState(0);
  const maxLimit = 20;

  // Handle increment
  const handleIncrement = () => {
    if (count < maxLimit) {
      setCount(count + 1);
    }
  };

  // Handle decrement
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // Handle reset
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <h1>Click Counter</h1>
      <p>Count: {count}</p>
      {count >= maxLimit && (
        <p style={{ color: 'red' }}>You have reached the limit!</p>
      )}
      <button onClick={handleIncrement} disabled={count >= maxLimit}>
        Increase
      </button>
      <button onClick={handleDecrement} disabled={count <= 0}>
        Decrease
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Counter;