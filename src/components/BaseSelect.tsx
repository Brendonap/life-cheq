import React from "react";

const SelectWrapper = ({
  label,
  name,
  value,
  options,
  onChangeFunction
}: any) => {
  return (
    <div className="md:w-1/2 mx-2 p-3">
      <div className="flex flex-col text-gray-700 text-center bg-gray-300 p-2">
        <label htmlFor={label} className="text-left font-bold mb-2 pl-1">
          {label}
        </label>
        <select value={value} name={name} onChange={onChangeFunction}>
          {options.map((option: string | number) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectWrapper;
