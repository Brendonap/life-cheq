import React, { useState } from "react";
import Life from "../components/Life";
import Medical from "../components/Medical";
import Unit from "../components/UnitTrust";

const PolicyList = () => {
  const [active, setActive] = useState("");
  return (
    <div>
      <div className="p-3 border border-black-500">
        <div className="flex flex-wrap mb-2 content-center">
          <button
            className="w-full md:w-1/3 pt-3 px-3 md:pr-2 focus:outline-none"
            onClick={() => setActive("life")}
          >
            <div className="bg-green-600 border rounded shadow p-2">
              <div className="text-white">Life Insurance</div>
            </div>
          </button>
          <button
            className="w-full md:w-1/3 pt-3 px-3 md:pr-2 focus:outline-none"
            onClick={() => setActive("unit")}
          >
            <div className="bg-red-600 border rounded shadow p-2">
              <div className="text-white">Unit Trust</div>
            </div>
          </button>
          <button
            className="w-full md:w-1/3 pt-3 px-3 md:pr-2 focus:outline-none"
            onClick={() => setActive("medical")}
          >
            <div className="bg-blue-600 border rounded shadow p-2">
              <div className="text-white">Medical Aid</div>
            </div>
          </button>
        </div>
      </div>
      <div className="flex w-full justify-center h-screen">
        <div className="w-full m-6">
          <div>
            {active === "life" && <Life />}
            {active === "unit" && <Unit />}
            {active === "medical" && <Medical />}
            {!active && <h1>Please Select Policy</h1>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyList;
