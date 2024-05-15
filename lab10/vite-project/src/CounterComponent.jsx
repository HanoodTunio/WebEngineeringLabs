// CounterComponent.js

import React, { useState } from 'react';

const CounterComponent = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: 'center', }}>
      <button onClick={decrement} style={{color: "black"}}>-</button>
      <span style={{ margin: '0 10px' }}>{count}</span>
      <button onClick={increment} style={{color: "black"}}>+</button>
    </div>
  );
};

export default CounterComponent;
