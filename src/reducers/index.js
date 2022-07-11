import { combineReducers } from 'redux';
import authReducer from './auth';
import reservationsReducer from './reservations';

export default combineReducers({
  auth: authReducer,
  reserve: reservationsReducer,
});
