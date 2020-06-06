import { createSelector } from 'reselect';

import reducers from '../reducers';

const selectDomain = (state) => state.user || reducers;

const makeSelectEmailError = () =>
  createSelector(selectDomain, (substate) => substate.emailError);

const makeSelectPasswordError = () =>
  createSelector(selectDomain, (substate) => substate.passwordError);

export { makeSelectEmailError, makeSelectPasswordError };
