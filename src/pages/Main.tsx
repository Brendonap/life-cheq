import React from "react";
import PolicyList from "./PolicyList";
import Policy from "./Policy";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
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
        <div>
          <Route exact path="/" component={PolicyList} />
          <Route exact path="/create" component={Policy} />
        </div>
      </div>
    </Router>
  );
};

export default App;
