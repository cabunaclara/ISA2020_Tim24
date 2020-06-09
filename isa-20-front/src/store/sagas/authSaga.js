import { call, put } from 'redux-saga/effects';
import authService from '../../services/AuthService';
import history from '../history';
import {
  PagePath,
  emailTaken,
  createdUserMessage,
  wrongPassword,
  userUpdatedMessage,
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

export function* updateUserSaga({ payload }) {
  try {
    alert('Prosao update');
    const { data } = yield call(authService.login, payload);
    if (data.status === userUpdatedMessage) {
      yield put(setEmailTakenError(false));
      let user = authService.getUser();
      user.email = payload.email;
      user.firstName = payload.firstName;
      user.lastName = payload.lastName;
      user.address = payload.address;
      user.city = payload.user;
      user.country = payload.country;
      user.phoneNumber = payload.phoneNumber;
      authService.updateUserInStorage(user);
      history.push(PagePath.HOME);
    } else if (data.status === emailTaken) {
      yield put(setEmailTakenError(true));
      history.push(PagePath.LOGIN);
    }
  } catch (error) {
    console.log(error); /*eslint-disable-line*/
  }
}
