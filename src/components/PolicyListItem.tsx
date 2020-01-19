import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition
} from "react-toasts";

const PolicyListItem = ({ policy }: any) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch({
      type: "DELETE_POLICY",
      payload: policy
    });
    ToastsStore.success("Policy Deleted");
  };

  return (
    <div className="flex-col bg-gray-300 border rounded shadow p-2 m-2 md:m-5">
      <div className="flex pb-3 border-b border-white">
        <h3 className="flex-1 text-left">{policy.label}</h3>
        <button className="bg-blue-500 text-white rounded-lg px-2">
          <Link to={`edit/${policy.id}`}>Edit</Link>
        </button>
        <button
          className="bg-red-500 text-white rounded-lg px-2 mx-3"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
      <div className="flex flex-col mt-3">
        {Object.keys(policy).map(key => {
          if (key !== "id") {
            return (
              <div className="flex md:my-1" key={key}>
                <div className="flex-1">{key}:</div>
                <div className="flex-1">{policy[key]}</div>
              </div>
            );
          } else {
            return <></>;
          }
        })}
      </div>
      <ToastsContainer
        store={ToastsStore}
        position={ToastsContainerPosition.TOP_LEFT}
      />
    </div>
  );
};

export default PolicyListItem;
