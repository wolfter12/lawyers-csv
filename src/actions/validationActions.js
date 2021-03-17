import { VALID_STRUCTURE } from './types';

export const changeValidity = (valid) => (dispatch) => {
  dispatch({
    type: VALID_STRUCTURE,
    valid,
  });
};
