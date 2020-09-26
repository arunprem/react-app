import axios from "axios";
import { GET_ERRORS, GET_PROJECT, GET_PROJECTS } from "./types";

export const creatProject = (project, history) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:8080/api/project/", project);
    console.log(res.status);
    history.push("/dashboard");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const getProject = () => async (dispatch) => {
  const res = await axios.get("http://localhost:8080/api/project/all");
  dispatch({
    type: GET_PROJECTS,
    payload: res.data,
  });
};

export const getProj = (id, history) => async (dispatch) => {
  const res = await axios.get(`http://localhost:8080/api/project/${id}`);
  dispatch({
    type: GET_PROJECT,
    payload: res.data,
  });
};
