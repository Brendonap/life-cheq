import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Life from "../components/Life";
import Medical from "../components/Medical";
import UnitTrust from "../components/UnitTrust";

const PolicyEdit = () => {
  let { id } = useParams();
  const { policies } = useSelector(state => state) as {
    policies: Array<object>;
  };

  let policy: any = policies.find((policy: any) => {
    return policy.id === id;
  });

  const { label } = policy;

  return (
    <div>
      <div className="flex w-full justify-center h-screen">
        <div className="w-full m-6">
          <div>
            {label === "life" && <Life policy={policy} />}
            {label === "unit" && <UnitTrust policy={policy} />}
            {label === "medical" && <Medical policy={policy} />}
            {!label && <h1>Policy not found</h1>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyEdit;
