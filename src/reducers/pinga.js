import {
  GET_PINGA,
  GET_PINGA_SUCCESS,
  GET_PINGA_FAILURE,
  SET_PINGA,
  SET_PINGA_SUCCESS,
  SET_PINGA_FAILURE,
  GET_USERS_SUCCESS
} from "../actions/";

export default (
  state = {
    pingas: [],
    users: [],
    isLoading: false,
    errorPinga: false
  },
  action
) => {
  switch (action.type) {
    case GET_PINGA:
      return {
        ...state,
        isLoading: true,
        pingas: {}
      };
    case GET_PINGA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        pingas: action.data
      };
    case GET_PINGA_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorPinga: action.error
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.data
      };
    default:
      return state;
  }
};
