import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import validationReducer from './validationReducer';
import fileReducer from './fileReducer';

const rootReducer = combineReducers({
  data: dataReducer,
  valid: validationReducer,
  file: fileReducer,
});

export default rootReducer;
