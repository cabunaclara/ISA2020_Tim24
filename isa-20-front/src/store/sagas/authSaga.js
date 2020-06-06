import { call, put } from 'redux-saga/effects';
import authService from '../../services/AuthService';
import history from '../history';
import {
  PagePath,
  emailTaken,
  createdUserMessage,
} from '../../utils/constants';
import { setEmailTakenAction } from '../actions/authActions';

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
      history.push(PagePath.LOGIN);
    } else if (data.status === emailTaken) {
      yield put(setEmailTakenAction());
    }
  } catch (error) {
    console.log(error); /*eslint-disable-line*/
  }
}
