import React from "react";

import "./App.css";
import Dashboard from "./component/Dashboard";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./component/layout/Navbar";
import Projectitems from "./component/project/Projectitems";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Addproject from "./component/project/Addproject";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/addProject" component={Addproject} />
      </div>
    </Router>
  );
}

export default App;
