import { all, takeLatest } from 'redux-saga/effects';
import { LOG_IN, REGISTER } from '../actions/ActionTypes';
import { logInSaga, registerSaga } from './authSaga';

export default function* rootSaga() {
  yield all([
    takeLatest(LOG_IN, logInSaga),
    takeLatest(REGISTER, registerSaga),
  ]);
}
