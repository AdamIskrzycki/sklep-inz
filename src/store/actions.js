import axios from "axios";

export const ADD = "ADD";
export const REMOVE_ONE = "REMOVE_ONE";
export const REMOVE_ALL = "REMOVE_ALL";
export const AUTH_START = "AUTH_START";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_FAIL = "AUTH_FAIL";

export const add = (product) => ({
  type: ADD,
  product: product,
});

export const removeOne = (id) => ({
  type: REMOVE_ONE,
  productId: id,
});

export const removeAll = (id) => ({
  type: REMOVE_ALL,
  productId: id,
});

export const authStart = () => ({
  type: AUTH_START,
});

export const authSuccess = (token, userId) => ({
  type: AUTH_SUCCESS,
  idToken: token,
  userId: userId
});

export const authFail = (error) => ({
  type: AUTH_FAIL,
  error: error,
});

export const auth = (email, password, isSignedUp) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };

    let url = ''
    if(!isSignedUp) {
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBicaRbaMp_gYwIGj5eB9nwyeXGZbDCZsw";
    } else url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBicaRbaMp_gYwIGj5eB9nwyeXGZbDCZsw';

    axios
      .post(url, authData)
      .then((response) => {
        console.log(response);
        dispatch(authSuccess(response.data.idToken, response.data.localId));
      })
      .catch((err) => {
        console.log(err);
        dispatch(authFail(err));
      });
  };
};
