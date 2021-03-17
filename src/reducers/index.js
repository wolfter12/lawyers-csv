import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import validationReducer from './validationReducer';
import loadingReducer from './loadingReducer';

const rootReducer = combineReducers({
  data: dataReducer,
  valid: validationReducer,
  isLoading: loadingReducer,
});

export default rootReducer;
