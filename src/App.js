import React from "react";

import "./App.css";
import Dashboard from "./component/Dashboard";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./component/layout/Navbar";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Addproject from "./component/project/Addproject";
import { Provider } from "react-redux";
import store from "./store";
import UpdateProject from "./component/project/UpdateProject";
import ProjectBoard from "./component/projectBoard/ProjectBoard";
import AddProjectTask from "./component/projectBoard/projectTasks/AddProjectTask";
import UpdateProjectTask from "./component/projectBoard/projectTasks/UpdateProjectTask";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />

          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/addProject" component={Addproject} />
          <Route exact path="/updateProject/:id" component={UpdateProject} />
          <Route exact path="/projectBoard/:id" component={ProjectBoard}/>
          <Route exact path="/addProjectTask/:id" component={AddProjectTask}/>
          <Route excat path="/updateProjectTask/:backlog_id/:pt_id" component={UpdateProjectTask}/>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
