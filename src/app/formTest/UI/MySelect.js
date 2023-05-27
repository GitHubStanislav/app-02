import React from "react";

function MySelect({ options, defaultValue, value, onChange }) {
  return (
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option disabled value="value" className="text-gray-500">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option
          key={`${option.name} - ${option.value}`}
          value={option.value}
          className="text-gray-900"
        >
          {option.name}
        </option>
      ))}
    </select>
  );
}

export default MySelect;
