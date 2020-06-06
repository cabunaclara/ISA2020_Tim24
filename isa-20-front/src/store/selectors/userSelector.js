import { createSelector } from 'reselect';

import reducers from '../reducers';

const selectDomain = (state) => state.user || reducers;

const makeSelectEmailError = () =>
  createSelector(selectDomain, (substate) => substate.emailError);

export { makeSelectEmailError };
