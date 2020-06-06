import produce from 'immer';
import {
  SET_EMAIL_TAKEN_ERROR,
  SET_PASSWORD_ERROR,
} from '../actions/ActionTypes';

export const initialState = { emailError: false, passwordError: false };

const userReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    const { type, payload } = action;
    switch (type) {
      case SET_EMAIL_TAKEN_ERROR:
        draft.emailError = payload;
        break;
      case SET_PASSWORD_ERROR:
        draft.passwordError = payload;
    }
  });

export default userReducer;
