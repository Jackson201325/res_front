import { userConstants } from '../constants/user';

import axios from 'axios';

function login(user) {
  function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
  function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
  return dispatch => {
    axios
      .post(
        "http://localhost:3000/sessions",
        {
          user
        },
        { withCredentials: true }
      )
      .then(
        response => {
          console.log({ response })
          dispatch(success(response.data));
          // dispatch(alertActions.success("Logged in succesfully".toString()));
        },
        error => {
          dispatch(failure(error.toString()));
          // dispatch(alertActions.error(error.toString()));
        }
      );
  };
}

function logout() {
  axios
    .delete("http://localhost:3000/logout", { withCredentials: true })
  return { type: userConstants.LOGOUT };
}

function register(user) {
  return dispatch => {
    axios
      .post(
        "http://localhost:3000/registrations",
        {
          user,
        },
        { credential: true }
      )
      .then(
        response => {
          dispatch(success(response.data));
          // dispatch(alertActions.success('Registration successful'));
        },
        error => {
          dispatch(failure(error.toString()));
          // dispatch(alertActions.error(error.toString()));
        }
      );
  };

  function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
  function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

export const userActions = {
  login,
  logout,
  register,
};
