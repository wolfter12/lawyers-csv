import { VALID_STRUCTURE } from '../actions/types';

const initialState = false;

const validationReducer = (state = initialState, action) => {
  switch (action.type) {
    case VALID_STRUCTURE:
      return action.valid;
    default:
      return state;
  }
};

export default validationReducer;
