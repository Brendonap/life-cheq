import React from "react";

const InputWrapper = ({ label, name, type, value, onChangeFunction }: any) => {
  return (
    <div className="md:w-1/2 mx-2 p-3">
      <div className="flex flex-col text-gray-700 text-center bg-gray-300 p-2">
        <label htmlFor={label} className="text-left font-bold mb-2 pl-1">
          {label}
        </label>
        <input
          className="pl-1 rounded"
          type={type}
          name={name}
          defaultValue={value || ""}
          onChange={onChangeFunction}
        />
      </div>
    </div>
  );
};

export default InputWrapper;
