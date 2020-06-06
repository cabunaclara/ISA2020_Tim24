import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import userReducer from '../reducers/userReducer';
import history from '../history';

export default combineReducers({
  user: userReducer,
  router: connectRouter(history),
});
