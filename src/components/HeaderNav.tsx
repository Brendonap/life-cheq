import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white px-8 pt-2 shadow-md">
      <div className="-mb-px flex justify-center">
        <Link
          className="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8"
          to="/"
        >
          Policy
        </Link>
        <Link
          className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8"
          to="/create"
        >
          Create New
        </Link>
      </div>
    </header>
  );
};

export default Header;
