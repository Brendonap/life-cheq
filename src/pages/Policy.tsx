import React, { useState } from "react";
import LifeInput from "../components/LifeInput";
import MedicalInput from "../components/MedicalInput";
import UnitInput from "../components/UnitInput";

const PolicyList = () => {
  const [active, setActive] = useState("");
  return (
    <div>
      <div className="p-3 border border-black-500">
        <div className="flex md:flex-wrap mb-2 content-center">
          <button
            className="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2 focus:outline-none"
            onClick={() => setActive("life")}
          >
            <div className="bg-green-600 border rounded shadow p-2">
              <div className="">test</div>
              <div className="text-white">Life Insurance</div>
            </div>
          </button>
          <button
            className="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2 focus:outline-none"
            onClick={() => setActive("unit")}
          >
            <div className="bg-red-600 border rounded shadow p-2">
              <div className="">test</div>
              <div className="text-white">Unit Trust</div>
            </div>
          </button>
          <button
            className="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2 focus:outline-none"
            onClick={() => setActive("medical")}
          >
            <div className="bg-blue-600 border rounded shadow p-2">
              <div className="">test</div>
              <div className="text-white">Medical Aid</div>
            </div>
          </button>
        </div>
      </div>
      <div className="flex w-full justify-center h-screen">
        <div className="w-full m-6">
          <div>
            {active === "life" && <LifeInput />}
            {active === "unit" && <UnitInput />}
            {active === "medical" && <MedicalInput />}
            {!active && <h1>Please Select Policy</h1>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyList;
