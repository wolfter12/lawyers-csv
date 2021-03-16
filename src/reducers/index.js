import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import validationReducer from './validationReducer';

const rootReducer = combineReducers({
  data: dataReducer,
  valid: validationReducer,
});

export default rootReducer;
