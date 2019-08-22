import axios from "axios";
import setRequestToken from "./../utils/setRequestToken";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";

import jwt_decode from "jwt-decode";
import { clearCurrentProfile } from "./profileActions";

// register user
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/apis/users/register", userData)
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const loginUser = (userData, history) => dispatch => {
  axios
    .post("/apis/users/login", userData)
    .then(res => {
      // set user token
      const { token } = res.data;

      // store token to localStorage
      localStorage.setItem("jwtToken", token);

      // set token as request header
      setRequestToken(token);

      //decode user from token
      const decodedUser = jwt_decode(token);

      dispatch(setCurrentUser(decodedUser));
      history.push("/dashboard");
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const setCurrentUser = decodedUser => {
  return {
    type: SET_CURRENT_USER,
    payload: decodedUser
  };
};

export const logoutUser = () => dispatch => {
  //remove token from localStorage
  localStorage.removeItem("jwtToken");

  //remove auth Header for further API calls
  setRequestToken(false);
  window.location.pathname = "/";
  dispatch({
    type: SET_CURRENT_USER,
    payload: {}
  });
  dispatch(clearCurrentProfile());
};
