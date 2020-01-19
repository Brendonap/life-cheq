import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition
} from "react-toasts";
import uuid from "uuid/v4";
import { format } from "date-fns";
import InputWrapper from "./BaseInput";
import BaseSelect from "./BaseSelect";

const defaultState = {
  label: "medical",
  planOption: "discovery core",
  coverStartDate: format(new Date(), "yyyy-MM-dd"),
  rewardsProgram: true
};

const Medical = (policy: any) => {
  const [input, setInput] = useState(
    Object.keys(policy).length ? policy.policy : defaultState
  );
  const dispatch = useDispatch();
  let history = useHistory();

  const handleInput = (event: any) => {
    setInput({
      ...input,
      [event.currentTarget.name]: event.currentTarget.value
    });
  };

  const handleSubmit = () => (Object.keys(policy).length ? edit() : add());

  const edit = () => {
    const { id } = policy.policy;
    dispatch({
      type: "EDIT_POLICY",
      id: id,
      payload: input
    });
    history.push("/");
  };

  const add = () => {
    dispatch({
      type: "ADD_POLICY",
      payload: { ...input, id: uuid(), label: "medical" }
    });
    ToastsStore.success("Medical Policy Created");
    setInput(defaultState);
  };

  return (
    <div className="">
      <div className="flex-col pt-5 flex-wrap">
        <div className="flex justify-between content-center pb-5 border-b border-gray-200">
          <h1 className="font-bold">Medical Aid</h1>
          <button
            className="bg-green-500 rounded-lg p-3 mx-10 focus:outline-none text-white"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
        <div className="flex flex-col mt-3">
          <div className="mx-2 p-3">
            <div className="flex flex-col text-gray-700 text-center bg-gray-300 p-2">
              <BaseSelect
                label="Plan's"
                name="planOption"
                value={input.planOption}
                options={["discovery core", "med life", "discovery plus"]}
                onChangeFunction={handleInput}
              />
            </div>
          </div>
          <div className="mx-2 p-3">
            <div className="flex flex-col text-gray-700 text-center bg-gray-300 p-2">
              <InputWrapper
                label="Cover Start Date"
                type="date"
                name="coverStartDate"
                value={input.coverStartDate}
                onChangeFunction={handleInput}
              />
            </div>
          </div>
          <div className=" mx-2 p-3">
            <div className="flex flex-col text-gray-700 text-center bg-gray-300 p-2">
              <InputWrapper
                label="Rewards Program"
                name="rewardsProgram"
                type="checkbox"
                value={input.rewardsProgram}
                onChangeFunction={handleInput}
              />
            </div>
          </div>
        </div>
      </div>
      <ToastsContainer
        store={ToastsStore}
        position={ToastsContainerPosition.TOP_LEFT}
      />
    </div>
  );
};

export default Medical;
