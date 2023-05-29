import React from "react";

function MyInput({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="search..."
      value={value}
      onChange={onChange}
      className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 m-5"
    />
  );
}

export default MyInput;
