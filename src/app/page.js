"use client";
import { useState } from "react";

export default function Home() {
  const [likes, setLikes] = useState(0);
  const [value, setValue] = useState("");
  const increment = () => {
    setLikes(likes + 1);
  };
  const decrement = () => {
    setLikes(likes - 1);
  };
  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="flex flex-col items-start m-9 ">
      <input
        className="border-4 border-black-500 bo rounded-md p-2 mb-2"
        value={value}
        onChange={handleInputChange}
        type="text"
      />
      <div className="border border-gray-500 rounded-md p-2 mb-2 ">{likes}</div>
      <button
        onClick={increment}
        className="border border-gray-500 rounded-md px-4 py-2 mb-2 bg-emerald-950 text-gray-50 w-1/5"
      >
        +
      </button>
      <button
        onClick={decrement}
        className="border border-gray-500 rounded-md px-4 py-2 bg-red-800 text-gray-50 w-1/5"
      >
        -
      </button>
    </div>
  );
}
