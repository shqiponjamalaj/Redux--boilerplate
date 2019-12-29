import axios from "axios";

const URL = "http://localhost:4000";

// ----------------------- Register new user ---------------------//
export const REGISTER_USER_START = "REGISTER_USER_START";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

export const register = (user, history) => async dispatch => {
  dispatch({ type: REGISTER_USER_START });

  try {
    const response = await axios.post(`${URL}/register`, user);

    dispatch({ type: REGISTER_USER_SUCCESS, payload: response.data });
    history.push("/login");
  } catch ({ message }) {
    dispatch({ type: REGISTER_USER_FAILURE, payload: message });
  }
};
// ----------------------- Register new user ---------------------//

// ----------------------- LOGIN new user ---------------------//
export const LOGIN_USER_START = "LOGIN_USER_START";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";

export const login = (user, history) => async dispatch => {
  dispatch({ type: LOGIN_USER_START });

  try {
    const response = await axios.post(`${URL}/login`, user);
    console.log(response);
    dispatch({ type: LOGIN_USER_SUCCESS, payload: response.data.users });
    history.push("/dashboard");
  } catch ({ message }) {
    dispatch({ type: LOGIN_USER_FAILURE, payload: message });
  }
};
// ----------------------- Register new user ---------------------//
