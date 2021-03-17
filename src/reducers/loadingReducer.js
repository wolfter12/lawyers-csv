import { LOADING } from '../actions/types';

const initialState = false;

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return action.loading;
    default:
      return state;
  }
};

export default loadingReducer;
