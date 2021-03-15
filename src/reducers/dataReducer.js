import { PARSE_FILE } from '../actions/types';

const initialState = [];

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case PARSE_FILE:
      console.log('action.payload', action.payload);
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default dataReducer;
