import React from "react";
import { useDispatch, useSelector } from "react-redux";

const PolicyList = () => {
  const state = useSelector(state => state);
  console.log(state);

  return (
    <div className="flex-col mb-2 content-center">
      <div className="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2">
        <div className="bg-green-600 border rounded shadow p-2">
          <div className="flex flex-row items-center">
            <div className="flex-shrink pl-1 pr-4">
              <i className="fa fa-wallet fa-2x fa-fw fa-inverse"></i>
            </div>
            <div className="flex-1 text-right">
              <h5 className="text-white">test</h5>
              <h3 className="text-white text-3xl">
                3249&euro;
                <span className="text-green-400">
                  <i className="fas fa-caret-down"></i>
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyList;
