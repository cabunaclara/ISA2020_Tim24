import { call, put } from 'redux-saga/effects';
import authService from '../../services/AuthService';

export function* logInSaga({ payload }) {
  try {
    yield call(authService.login, payload);
  } catch (error) {
    console.log(error); /*eslint-disable-line*/
  }
}
