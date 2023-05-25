"use client";
import { useState } from "react";
import CounterFirst from "@/app/components/CounterFirst";
import MyInputFirst from "@/app/components/MyInputFirst";

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
      <MyInputFirst value={value} onChangeInput={handleInputChange} />
      <CounterFirst
        likes={likes}
        incrementHandler={increment}
        decrementHandler={decrement}
      />
    </div>
  );
}
