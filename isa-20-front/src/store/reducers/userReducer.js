import produce from 'immer';
import { SET_EMAIL_TAKEN_ERROR } from '../actions/ActionTypes';

export const initialState = { emailError: false };

const userReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    const { type, payload } = action;
    switch (type) {
      case SET_EMAIL_TAKEN_ERROR:
        draft.emailError = payload;
        break;
    }
  });

export default userReducer;
