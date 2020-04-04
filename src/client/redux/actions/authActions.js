import firebase, { googleProvider } from '../../firebase/firebase';
import { fetchReceivedLetters } from './lettersActions';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const VERIFY_REQUEST = 'VERIFY_REQUEST';
export const VERIFY_SUCCESS = 'VERIFY_SUCCESS';

export const requestLogin = () => ({
  type: LOGIN_REQUEST
});

export const receiveLogin = user => ({
  type: LOGIN_SUCCESS,
  user
});

export const loginError = () => ({
  type: LOGIN_FAILURE
});

export const requestLogout = () => ({
  type: LOGOUT_REQUEST
});

export const receiveLogout = () => ({
  type: LOGOUT_SUCCESS
});

export const logoutError = () => ({
  type: LOGOUT_FAILURE
});

export const verifyRequest = () => ({
  type: VERIFY_REQUEST
});

export const verifySuccess = () => ({
  type: VERIFY_SUCCESS
});

export const loginUser = () => (dispatch) => {
  dispatch(requestLogin());
  firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((user) => {
      dispatch(receiveLogin(user));
    })
    .catch(() => {
      dispatch(loginError());
    });
};

export const logoutUser = () => (dispatch) => {
  dispatch(receiveLogout());
  firebase
    .auth()
    .signOut()
    .then(() => dispatch(logoutUser()))
    .catch(() => dispatch(logoutError()));
};

export const verifyAuth = () => (dispatch) => {
  dispatch(verifyRequest());
  firebase
    .auth()
    .onAuthStateChanged((user) => {
      if (user) {
        dispatch(receiveLogin(user));
        dispatch(fetchReceivedLetters(user.uid))
      }

      dispatch(verifySuccess());
    });
};
