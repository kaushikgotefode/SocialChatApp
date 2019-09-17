import {
  GET_PROFILE,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  GET_ERRORS,
  GET_ALL_PROFILES,
  SET_CURRENT_USER
} from "./types";
import axios from "axios";
import setRequestToken from "./../utils/setRequestToken";

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

export const getProfileList = (page, size) => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get("/apis/profile/all", { params: { page, size } })
    // .get("/apis/profile/all")
    .then(res => {
      dispatch({
        type: GET_ALL_PROFILES,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ALL_PROFILES,
        payload: []
      });
    });
};

export const createProfile = (profile, history) => dispatch => {
  dispatch(setProfileLoading());
  axios
    .post("/apis/profile", profile)
    .then(res => {
      history.push("/dashboard");
    })
    .catch(err => {
      dispatch({
        type: GET_PROFILE,
        payload: {}
      });
      dispatch({
        type: GET_ERRORS,
        payload: err.response ? err.response.data : err
      });
    });
};
export const deleteProfile = history => dispatch => {
  axios
    .delete("/apis/profile")
    .then(res => {
      dispatch(clearCurrentProfile());
      localStorage.removeItem("jwtToken");
      setRequestToken(false);
      dispatch({ type: SET_CURRENT_USER, payload: {} });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response ? err.response.data : err
      });
    });
};
export const addExperience = (experience, history) => dispatch => {
  axios
    .post("/apis/profile/experience", experience)
    .then(res => {
      history.push("/dashboard");
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response ? err.response.data : err
      });
    });
};
export const addEducation = (education, history) => dispatch => {
  axios
    .post("/apis/profile/education", education)
    .then(res => {
      history.push("/dashboard");
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response ? err.response.data : err
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
