import { all, takeLatest } from 'redux-saga/effects';
import { LOG_IN } from '../actions/ActionTypes';
import { logInSaga } from './authSaga';

export default function* rootSaga() {
  yield all([takeLatest(LOG_IN, logInSaga)]);
}
