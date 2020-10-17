import React, { Component } from "react";
import { Link } from "react-router-dom";
import Backloag from "./Backloag";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getBackLog } from "../../actions/backlogActions";


class ProjectBoard extends Component {

  constructor(){
    super();
    this.state={
      errors:{}
    }
  }


  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getBackLog(id);
  }


  componentWillReceiveProps(nextProps){
  
    if(nextProps.errors){
      this.setState(
        {
          errors:nextProps.errors
        }
      )
    }
  }

  render() {

    let BoardContent;
    
    const { id } = this.props.match.params;
     const { project_tasks } = this.props.backlog;
     const {errors} = this.state;

     const boardAlgoritham =(errors,project_tasks)=>{
    
       if(project_tasks.length===0){
         if(errors.projectNoteFound){
           return (
            <div className="alert alert-danger text-center" role="alert">{errors.projectNoteFound }</div>
           )
         }else{
           return(
            <div className="alert alert-danger text-center" role="alert">No project tasks on this board</div>
           )
        }
       }else{
        return  <Backloag project_task_props={project_tasks} />;
       }
     };

     BoardContent = boardAlgoritham(errors,project_tasks)

    return (
      <div className="container">
        <Link to={`/addProjectTask/${id}`} className="btn btn-primary mb-3">
          <i className="fa fa-plus-circle"> Create Project Task</i>
        </Link>
        <br />
        
        <hr />
        {BoardContent}
      </div>
    );
  }
}

ProjectBoard.propTypes = {
  backlog: PropTypes.object.isRequired,
  getBackLog: PropTypes.func.isRequired,
  errors:PropTypes.object.isRequired
};

const mapStatetoPtops = (state) => ({
  backlog: state.backlog,
  errors:state.errors
});
export default connect(mapStatetoPtops, { getBackLog })(ProjectBoard);
