import { firebaseImpl } from "../firebase/Firebase";

export const GET_PINGA = "GET_PINGA";
export const GET_PINGA_SUCCESS = "GET_PINGA_SUCCESS";
export const GET_PINGA_FAILURE = "GET_PINGA_FAILURE";

export const SET_PINGA = "SET_PINGA";
export const SET_PINGA_SUCCESS = "SET_PINGA_SUCCESS";
export const SET_PINGA_FAILURE = "SET_PINGA_FAILURE";

const getPinga = () => {
  return {
    type: GET_PINGA
  };
};

const getPingaSuccess = data => {
  return {
    type: GET_PINGA_SUCCESS,
    data
  };
};

const getPingaFailure = error => {
  return {
    type: GET_PINGA_FAILURE,
    error
  };
};

const setPinga = () => {
  return {
    type: SET_PINGA
  };
};

const setPingaSuccess = () => {
  return {
    type: SET_PINGA_SUCCESS
  };
};

const setPingaFailure = error => {
  return {
    type: SET_PINGA_FAILURE,
    error
  };
};

export const getPinga = () => {};

export const setPinga = pinga => {};

// export const loginUser = (email, password) => dispatch => {
//   dispatch(requestLogin());
//   firebaseImpl
//     .auth()
//     .signInWithEmailAndPassword(email, password)
//     .then(user => {
//       dispatch(receiveLogin(user));
//     })
//     .catch(error => {
//       dispatch(loginError(error));
//     });
// };
