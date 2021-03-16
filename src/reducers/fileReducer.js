import { ADD_FILE_NAME } from '../actions/types';

const initialState = '';

const fileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FILE_NAME:
      return action.name;
    default:
      return state;
  }
};

export default fileReducer;
