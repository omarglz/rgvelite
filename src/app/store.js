import { createStore, combineReducers } from 'redux';
import tournamentsLevelReducer from './reducers/tournamentsLevelReducer.js';
import tournamentsMonthReducer from './reducers/tournamentsMonthReducer.js';
import rankingsLevelReducer from './reducers/rankingsLevelReducer.js';

export default createStore(
	combineReducers({
		tournamentsLevelReducer, tournamentsMonthReducer, rankingsLevelReducer
	})
);