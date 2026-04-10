import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  return (
    <div className="container">
      <h1>🚀 DevOps Counter</h1>

      <div className="card">
        <p className="count">{count}</p>

        <div className="buttons">
          <button onClick={decrement}>-</button>
          <button onClick={reset}>Reset</button>
          <button onClick={increment}>+</button>
        </div>
      </div>
    </div>
  );
}
