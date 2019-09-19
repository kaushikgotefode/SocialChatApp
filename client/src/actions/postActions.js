import axios from "axios";
import { ADD_POST, GET_ERRORS, GET_POSTS, POST_LOADING } from "./types";

export const addPost = postData => dispatch => {
  axios
    .post("/apis/posts", postData)
    .then(res => {
      dispatch({
        type: ADD_POST,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response ? err.response.data : err
      });
    });
};

export const getAllPost = () => dispatch => {
  dispatch(setPostLoading());
  axios
    .get("/apis/posts")
    .then(res => {
      dispatch({
        type: GET_POSTS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response ? err.response.data : err
      });
    });
};

export const setPostLoading = () => {
  return {
    type: POST_LOADING
  };
};
