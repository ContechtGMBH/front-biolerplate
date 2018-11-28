import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';

import ReducerTesting from './reducer-testing';

export const allReducers = combineReducers({
  form: formReducer,
  testing: ReducerTesting,
});

export default allReducers;
