"use client"
import useCounter from "../hooks/useCounter"

const Counter = () => {
  const { count, increment, decrement, reset } = useCounter(0)

  return (
    <div className="counter-container">
      <h2>Custom Counter Hook Demo</h2>
      <div className="counter-display">{count}</div>
      <div className="counter-buttons">
        <button className="counter-btn decrement" onClick={decrement}>
          Decrement
        </button>
        <button className="counter-btn reset" onClick={reset}>
          Reset
        </button>
        <button className="counter-btn increment" onClick={increment}>
          Increment
        </button>
      </div>
    </div>
  )
}

export default Counter
