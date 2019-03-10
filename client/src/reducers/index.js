import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import jokeReducer from './jokeReducer';

export default combineReducers({
	errors: errorReducer,
	auth: authReducer,
	jokes: jokeReducer
});