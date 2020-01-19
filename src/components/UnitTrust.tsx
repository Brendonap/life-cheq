import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition
} from "react-toasts";
import uuid from "uuid/v4";

import InputWrapper from "./BaseInput";

const defaultState = {
  label: "unit",
  lumpSumContribution: 1000,
  debitOrderAmount: 1000,
  fundName: "Nedgroup Core Accelarated",
  startMonth: ""
};

const UnitTrust = (policy: any) => {
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
    console.log(id);
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
      payload: { ...input, id: uuid(), label: "unit" }
    });
    ToastsStore.success("Unit Trust Policy Created");
    setInput(defaultState);
  };

  return (
    <div className="">
      <div className="flex-col pt-5 flex-wrap">
        <div className="flex justify-between content-center pb-5 border-b border-gray-200">
          <h1 className="font-bold">Unit Trust</h1>
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
              <InputWrapper
                label="Lump Sum Contributions"
                type="number"
                name="lumpSumContribution"
                value={input.lumpSumContribution}
                onChangeFunction={handleInput}
              />
            </div>
          </div>
          <div className=" mx-2 p-3">
            <div className="flex flex-col text-gray-700 text-center bg-gray-300 p-2">
              <InputWrapper
                label="Debit Order Amount"
                name="debitOrderAmount"
                type="number"
                value={input.debitOrderAmount}
                onChangeFunction={handleInput}
              />
            </div>
          </div>
          <div className=" mx-2 p-3">
            <div className="flex flex-col text-gray-700 text-center bg-gray-300 p-2">
              <InputWrapper
                label="Fund Name"
                name="fundName"
                type="text"
                value={input.fundName}
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

export default UnitTrust;
