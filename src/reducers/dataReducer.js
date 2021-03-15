import { PARSE_FILE } from '../actions/types';

const initialState = [];

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case PARSE_FILE:
      return [...action.payload];
    default:
      return state;
  }
};

export default dataReducer;
