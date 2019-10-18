import { firebaseDatabase } from "../firebase/Firebase";

export const GET_PINGA = "GET_PINGA";
export const GET_PINGA_SUCCESS = "GET_PINGA_SUCCESS";
export const GET_PINGA_FAILURE = "GET_PINGA_FAILURE";

export const SET_PINGA = "SET_PINGA";
export const SET_PINGA_SUCCESS = "SET_PINGA_SUCCESS";
export const SET_PINGA_FAILURE = "SET_PINGA_FAILURE";

export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";

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

const getUsersSuccess = data => {
  return {
    type: GET_USERS_SUCCESS,
    data
  };
};

export const getPingaFirebase = () => dispatch => {
  dispatch(getPinga());
  try {
    let usersRef = firebaseDatabase.ref("users");
    usersRef.on("value", dataSnapshot => {
      let snap = dataSnapshot.val();
      dispatch(getUsersSuccess(snap));
    });

    let pingaRef = firebaseDatabase.ref("pinga");
    pingaRef.on("value", dataSnapshot => {
      let snap = dataSnapshot.val();
      dispatch(getPingaSuccess(snap));
    });
  } catch (err) {
    dispatch(getPingaFailure(err));
  }
};

export const setPingaFirebase = pinga => dispatch => {
  dispatch(setPinga());
  try {
    let pingaRef = firebaseDatabase.ref("pinga");
    pingaRef.set(pinga);
    dispatch(setPingaSuccess());
  } catch (err) {
    dispatch(setPingaFailure(err));
  }
};
