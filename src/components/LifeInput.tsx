import React, { useState } from "react";

// "label": "New medical aid",
// "action-type": "new-medical-aid",
// "ma-plan-option": "Discovery Coastal Core",
// "rewards-program?": true,
// "cover-start-date": "2019-08-16"

const LifeInput = () => {
  // const [input, handleInputChange] = useInputChange();
  const [input, setInput] = useState("my text");

  const handleSubmit = () => {
    console.log("submit");
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.currentTarget.value);
  };

  return (
    <div>
      <h1 className="font-lg font-right">Life Insurance</h1>
      <div className="flex flex-wrap sm:flex-col px-5">
        <div className="w-1/3 p-2">
          <div className="flex flex-col text-center bg-gray-200 p-4">
            <label htmlFor="label" className="text-left">
              label
            </label>
            <input type="text" name="label" value="Life Insurance" disabled />
          </div>
        </div>
        <div className="w-1/3 p-2">
          <div className="text-gray-700 text-center bg-gray-200 p-2">
            medical aid dropdown
          </div>
        </div>
        <div className="w-1/3 p-2">
          <div className="text-gray-700 text-center bg-gray-200 p-2">
            start date
          </div>
        </div>
        <div className="w-1/3 p-2">
          <div className="text-gray-700 text-center bg-gray-200 p-2">
            rewards program ?
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeInput;
