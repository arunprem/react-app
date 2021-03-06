import axios from "axios";
import { GET_ERRORS, GET_PROJECT, GET_PROJECTS, DELETE_PROJECT } from "./types";

export const creatProject = (project, history) => async (dispatch) => {
  try {
    const res = await axios.post("/api/project/", project);
    console.log(res.status);
    history.push("/dashboard");
    dispatch({
      type: GET_ERRORS,
      payload: {},
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const getProject = () => async (dispatch) => {
  const res = await axios.get("/api/project/all");
  dispatch({
    type: GET_PROJECTS,
    payload: res.data,
  });
};

export const getProj = (id, history) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/project/${id}`);
    dispatch({
      type: GET_PROJECT,
      payload: res.data,
    });
  } catch (error) {
    history.push("/dashboard");
  }
};

export const deleteProject = (id) => async (dispatch) => {

  if(window.confirm(`You are deleting project  ${id},this action cannot be undone`))
  {
    await axios.delete(`/api/project/${id}`);
    dispatch({
      type: DELETE_PROJECT,
      payload: id,
    });
  }

};
