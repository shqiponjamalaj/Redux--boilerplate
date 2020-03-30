import axios from "axios";

const URL = "http://www.recipepuppy.com/api/?";

// ----------------------- GET RECIPE RECIPE ---------------------//
export const GET_RECIPE_START = "GET_RECIPE_START";
export const GET_RECIPE_SUCCESS = "GET_RECIPE_SUCCESS";
export const GET_RECIPE_FAILURE = "GET_RECIPE_FAILURE";

export const getRecipe = () => async dispatch => {
  dispatch({ type: GET_RECIPE_START });

  try {
    const response = await axios.get(`${URL}i=onions,garlic&q=omelet&p=1`);
    dispatch({ type: GET_RECIPE_SUCCESS, payload: response.data.results });
  } catch ({ message }) {
    dispatch({ type: GET_RECIPE_FAILURE, payload: message });
  }
};
// ----------------------- GET RECIPE RECIPE ---------------------//
