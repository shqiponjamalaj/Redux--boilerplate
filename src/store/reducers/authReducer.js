import {
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  LOGIN_USER_START,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS
} from "../actions/authActions";

const initialState = {
  users: [],
  isLoading: false,
  error: ""
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_START:
      return {
        ...state,
        isLoading: true
      };

    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.payload
      };

    case REGISTER_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    case LOGIN_USER_START:
      return {
        ...state,
        isLoading: true
      };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.payload
      };

    case LOGIN_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default authReducer;
