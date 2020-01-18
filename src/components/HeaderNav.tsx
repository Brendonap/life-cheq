import React from "react";

const HeaderNav = () => {
  return (
    <div>
      <div className="bg-white px-8 pt-2 shadow-md">
        <div className="-mb-px flex justify-center">
          <a
            className="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8"
            href="#"
          >
            Policy
          </a>
          <a
            className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8"
            href="#"
          >
            Create New
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
