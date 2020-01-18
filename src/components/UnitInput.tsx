import React, { useState } from "react";

// "label": "New medical aid",
// "action-type": "new-medical-aid",
// "ma-plan-option": "Discovery Coastal Core",
// "rewards-program?": true,
// "cover-start-date": "2019-08-16"

const UnitInput = () => {
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
      <div className="flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 lg:-mx-1 xl:-mx-1">
        <div className="my-1 px-1 w-full md:w-1/3 overflow-hidden sm:my-1 sm:px-1 lg:my-1 lg:px-1 xl:my-1 xl:px-1">
          1
        </div>

        <div className="my-1 px-1 w-full md:w-1/3 overflow-hidden sm:my-1 sm:px-1 lg:my-1 lg:px-1 xl:my-1 xl:px-1">
          1
        </div>

        <div className="my-1 px-1 w-full md:w-1/3 overflow-hidden sm:my-1 sm:px-1 lg:my-1 lg:px-1 xl:my-1 xl:px-1">
          1
        </div>

        <div className="my-1 px-1 w-full md:w-1/3 overflow-hidden sm:my-1 sm:px-1 lg:my-1 lg:px-1 xl:my-1 xl:px-1">
          1
        </div>
      </div>
    </div>
  );
};

export default UnitInput;
