import { call, put } from 'redux-saga/effects';
import authService from '../../services/AuthService';
import history from '../history';
import {
  PagePath,
  emailTaken,
  createdUserMessage,
  wrongPassword,
} from '../../utils/constants';
import { setEmailTakenError, setPasswordError } from '../actions/authActions';

export function* logInSaga({ payload }) {
  try {
    yield call(authService.login, payload);
    alert('Login radi');
  } catch (error) {
    console.log(error); /*eslint-disable-line*/
  }
}

export function* registerSaga({ payload }) {
  try {
    alert('Prosao register');
    const { data } = yield call(authService.login, payload);
    if (data.status === createdUserMessage) {
      yield put(setEmailTakenError(false));
      history.push(PagePath.LOGIN);
    } else if (data.status === emailTaken) {
      yield put(setEmailTakenError(true));
    }
  } catch (error) {
    console.log(error); /*eslint-disable-line*/
  }
}

export function* changePasswordSaga({ payload }) {
  try {
    alert('Prosao change');
    const { data } = yield call(authService.login, payload);
    if (data.status === wrongPassword) {
      yield put(setPasswordError(true));
    } else {
      yield put(setPasswordError(false));
      history.push(PagePath.LOGIN);
    }
  } catch (error) {
    console.log(error); /*eslint-disable-line*/
  }
}
