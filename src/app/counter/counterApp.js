import { useState } from "react";

const CounterApp = () => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter((prevState) => prevState + 1);
  };

  const decreaseCounter = () => {
    setCounter((prevState) => prevState - 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <div className="container mx-auto py-4 pl-5">
      <div className="text-3xl font-bold mb-4">{counter}</div>
      <div className="flex gap-2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={increaseCounter}
        >
          Plus
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
          onClick={decreaseCounter}
        >
          Minus
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
          onClick={resetCounter}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CounterApp;
