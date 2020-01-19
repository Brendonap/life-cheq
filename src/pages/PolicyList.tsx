import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import PolicyListItem from "../components/PolicyListItem";

const PolicyList = () => {
  const state = useSelector(state => state) as { policies: Array<object> };
  const { policies } = state;
  if (policies.length) {
    return (
      <div className="w-full h-full">
        {policies.map((policy: any) => (
          <PolicyListItem key={policy.id} policy={policy} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="bg-green-500 mx-20 mt-20 py-5 rounded-lg">
        <Link className="text-white font-xl" to="/create">
          create policies
        </Link>
      </div>
    );
  }
};

export default PolicyList;
