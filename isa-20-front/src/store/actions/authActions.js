import { LOG_IN, REGISTER, SET_EMAIL_TAKEN_ERROR } from './ActionTypes';

export const logInAction = (payload) => ({ type: LOG_IN, payload });

export const registerAction = (payload) => ({ type: REGISTER, payload });

export const setEmailTakenAction = (payload) => ({
  type: SET_EMAIL_TAKEN_ERROR,
  payload,
});
