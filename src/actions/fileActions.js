import { ADD_FILE_NAME } from './types';

export const addFileName = (name) => (dispatch) => {
  dispatch({
    type: ADD_FILE_NAME,
    name,
  });
};
