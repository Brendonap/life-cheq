import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PolicyList from "./pages/PolicyList";
import PolicyCreate from "./pages/PolicyCreate";
import PolicyEdit from "./pages/PolicyEdit";
import Header from "./components/HeaderNav";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <div>
          <Route exact path="/" component={PolicyList} />
          <Route exact path="/create" component={PolicyCreate} />
          <Route exact path="/edit/:id" component={PolicyEdit} />
        </div>
      </div>
    </Router>
  );
};

export default App;
