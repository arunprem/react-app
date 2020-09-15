import React, { Component } from "react";
import Navbar from "./layout/Navbar";
import CreateProjectButton from "./project/CreateProjectButton";
import Projectitems from "./project/Projectitems";

class Dashboard extends Component {
  render() {
    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Projects</h1>
              <br />
              <CreateProjectButton />
              <br />
              <hr />
            </div>
          </div>
          <Projectitems />
        </div>
      </div>
    );
  }
}
export default Dashboard;
