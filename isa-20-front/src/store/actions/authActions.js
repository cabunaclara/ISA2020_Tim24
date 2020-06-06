import {
  LOG_IN,
  REGISTER,
  SET_EMAIL_TAKEN_ERROR,
  SET_PASSWORD_ERROR,
  CHANGE_PASSWORD,
} from './ActionTypes';

export const logInAction = (payload) => ({ type: LOG_IN, payload });

export const registerAction = (payload) => ({ type: REGISTER, payload });

export const changePasswordAction = (payload) => ({
  type: CHANGE_PASSWORD,
  payload,
});

export const setEmailTakenError = (payload) => ({
  type: SET_EMAIL_TAKEN_ERROR,
  payload,
});

export const setPasswordError = (payload) => ({
  type: SET_PASSWORD_ERROR,
  payload,
});
