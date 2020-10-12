import React, { Component } from "react";
import { Link } from "react-router-dom";
import Backloag from "./Backloag";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getBackLog } from "../../actions/backlogActions";
import ProjectTask from "./projectTasks/ProjectTask";

class ProjectBoard extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getBackLog(id);
  }
  render() {
    const { id } = this.props.match.params;

    const { project_tasks } = this.props.backlog;
    return (
      <div className="container">
        <Link to={`/addProjectTask/${id}`} className="btn btn-primary mb-3">
          <i className="fa fa-plus-circle"> Create Project Task</i>
        </Link>
        <br />
        <hr />
        <Backloag project_task_props={project_tasks} />
      </div>
    );
  }
}

ProjectBoard.propTypes = {
  backlog: PropTypes.object.isRequired,
  getBackLog: PropTypes.func.isRequired,
};

const mapStatetoPtops = (state) => ({
  backlog: state.backlog,
});
export default connect(mapStatetoPtops, { getBackLog })(ProjectBoard);
