import axios from "axios";
import { GET_ERRORS } from "./types";

export const registerUser = (userData, history) => reducer => {
  axios
    .post("/apis/users/register", userData)
    .then(res => history.push("/login"))
    .catch(err =>
      reducer({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
