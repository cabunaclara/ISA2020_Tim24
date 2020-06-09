import { all, takeLatest } from 'redux-saga/effects';
import {
  LOG_IN,
  REGISTER,
  CHANGE_PASSWORD,
  UPDATE_USER_PROFILE,
} from '../actions/ActionTypes';
import {
  logInSaga,
  registerSaga,
  changePasswordSaga,
  updateUserSaga,
} from './authSaga';

export default function* rootSaga() {
  yield all([
    takeLatest(LOG_IN, logInSaga),
    takeLatest(REGISTER, registerSaga),
    takeLatest(CHANGE_PASSWORD, changePasswordSaga),
    takeLatest(UPDATE_USER_PROFILE, updateUserSaga),
  ]);
}
