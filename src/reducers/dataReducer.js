import { PARSE_FILE, DELETE_DATA } from '../actions/types';

const initialState = [];

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case PARSE_FILE:
      return [...action.payload];
    case DELETE_DATA:
      return [];
    default:
      return state;
  }
};

export default dataReducer;
