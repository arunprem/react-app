import React, { Component } from "react";
import Navbar from "./layout/Navbar";
import CreateProjectButton from "./project/CreateProjectButton";
import Projectitems from "./project/Projectitems";
import { connect } from "react-redux";
import { getProject } from "../actions/projectActions";
import PropTypes from "prop-types";

class Dashboard extends Component {
  //life cycle hooks

  componentDidMount() {
    this.props.getProject();
  }
  render() {
    const projects = this.props.project.projects;
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
          {projects.map((project) => (
            <Projectitems key={project.id} project={project} />
          ))}
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  project: PropTypes.object.isRequired,
  getProject: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  project: state.project,
});
export default connect(mapStateToProps, { getProject })(Dashboard);
