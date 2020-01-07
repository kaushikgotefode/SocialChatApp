import axios from "axios";
import {
  ADD_POST,
  GET_ERRORS,
  GET_POSTS,
  GET_POST,
  POST_LOADING
} from "./types";

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

export const likePost = id => dispatch => {
  axios
    .post(`/apis/posts/like/${id}`)
    .then(res => {
      dispatch({
        type: GET_POST,
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

export const unlikePost = id => dispatch => {
  axios
    .post(`/apis/posts/unlike/${id}`)
    .then(res => {
      dispatch({
        type: GET_POST,
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
export const viewPost = (post, history) => dispatch => {
  dispatch({
    type: GET_POST,
    payload: post
  });
  history.push("/view-post");
};

export const commentPost = (id, postData) => dispatch => {
  axios
    .post(`/apis/posts/comment/${id}`, postData)
    .then(res => {
      dispatch({
        type: GET_POST,
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
export const deleteComment = id => dispatch => {
  axios
    .delete(`/apis/posts/comment/${id}`)
    .then(res => {
      dispatch({
        type: GET_POST,
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
