import { PARSE_FILE } from './types';
import csv from '../parser/csv';
import getDuplication from '../utils/mark-duplication';
import { HAS_CHILDREN } from '../configs/header-accessors';

export const parseFile = (file) => (dispatch) => {
  if (file instanceof Blob) {
    csv(file)
      .then(({ data }) => data.map((obj, idx) => ({ id: idx + 1, ...obj })))
      .then((data) => getDuplication(data))
      .then((data) =>
        data.map((obj) => {
          return { ...obj, [HAS_CHILDREN]: String(obj[HAS_CHILDREN]) };
        })
      )
      .then((data) => {
        console.log(data);
        dispatch({
          type: PARSE_FILE,
          payload: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
