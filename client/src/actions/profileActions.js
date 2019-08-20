import {
  GET_PROFILE,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  GET_ERRORS
} from "./types";
import axios from "axios";

export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get("/apis/profile")
    .then(res => {
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_PROFILE,
        payload: {}
      });
    });
};

export const createProfile = profile => dispatch => {
  dispatch(setProfileLoading());
  axios
    .post("/apis/profile", profile)
    .then(res => {
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_PROFILE,
        payload: {}
      });
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};
