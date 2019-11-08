import {
  GET_RECIPE_START,
  GET_RECIPE_SUCCESS,
  GET_RECIPE_FAILURE
} from "../actions/recipeActions";

const initialState = {
  recipes: [],
  isLoading: false,
  error: ""
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPE_START:
      return {
        ...state,
        isLoading: true
      };

    case GET_RECIPE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        recipes: action.payload
      };

    case GET_RECIPE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default recipeReducer;
