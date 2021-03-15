import { PARSE_FILE } from './types';
import csv from '../parser/csv';

export const parseFile = (file) => (dispatch) => {
  if (file instanceof Blob) {
    csv(file)
      .then((results) => {
        dispatch({
          type: PARSE_FILE,
          payload: results.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
