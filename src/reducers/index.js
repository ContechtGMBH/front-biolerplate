import {combineReducers} from 'redux';

import ReducerTesting from './reducer-testing';

export const allReducers = combineReducers({
  testing: ReducerTesting,
});

export default allReducers;
