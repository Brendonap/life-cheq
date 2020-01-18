import React, { useState } from "react";
import { useDispatch } from "react-redux";

const MedicalInput = () => {
  const defaultState = {
    label: "test"
  };

  const [input, setInput] = useState(defaultState);
  const dispatch = useDispatch();

  const handleSubmit = (): void => {
    dispatch({
      type: "ADD_POLICY",
      payload: input
    });
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, label: event.currentTarget.value });
  };

  return (
    <div>
      <div className="flex mb-5">
        <h1 className="w-full font-right">Medical Aid</h1>
        <button
          className="bg-green-500 rounded-lg p-3 focus:outline-none text-white"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      <div className="flex flex-wrap px-5 bg-gray-200">
        <div className="w-1/3 p-2">
          <div className="flex flex-col text-gray-700 text-center bg-gray-400 p-2">
            <label htmlFor="label" className="text-left">
              label
            </label>
            <input type="text" name="label" value="Life Insurance" disabled />
          </div>
        </div>
        <div className="w-1/3 p-2">
          <div className="text-gray-700 text-center bg-gray-400 p-2">
            <label htmlFor="drop" className="text-left">
              medical aid drop
            </label>
            <input
              type="text"
              name="drop"
              value={input.label}
              onChange={handleInput}
            />
          </div>
        </div>
        <div className="w-1/3 p-2">
          <div className="text-gray-700 text-center bg-gray-400 p-2">
            start date
          </div>
        </div>
        <div className="w-1/3 p-2">
          <div className="text-gray-700 text-center bg-gray-400 p-2">
            rewards program ?
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalInput;
