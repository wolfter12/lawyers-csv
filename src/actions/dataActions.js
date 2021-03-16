import { PARSE_FILE } from './types';
import csv from '../parser/csv';
import getDuplication from '../utils/mark-duplication';
import { HAS_CHILDREN, LICENSE_STATES } from '../configs/header-accessors';
import statesJSON from '../configs/states_titlecase.json';

// TODO: convert all boolean to string
// TODO: ask the client about a range of input formats
export const parseFile = (file) => (dispatch) => {
  if (file instanceof Blob) {
    csv(file)
      .then(({ data }) => data.map((obj, idx) => ({ id: idx + 1, ...obj })))
      .then((data) => getDuplication(data))
      .then((data) =>
        data.map((obj) => {
          const hasChildren =
            obj[HAS_CHILDREN] != null ? String(obj[HAS_CHILDREN]) : 'false';
          return { ...obj, [HAS_CHILDREN]: hasChildren };
        })
      )
      .then((data) => {
        return data.map((obj) => {
          const currentDataStates = obj[LICENSE_STATES].split(/\s*\|\s*/);
          const currentDataStatesAbbreviationArr = currentDataStates.map(
            (str) => {
              const state = statesJSON.find(({ name, abbreviation }) => {
                return (
                  name.toLowerCase() === str.toLowerCase() ||
                  abbreviation.toLowerCase() === str.toLowerCase()
                );
              });
              if (state !== undefined) {
                return state.abbreviation;
              }
              return str; // If there is no such state in list return original value
            }
          );
          const states = currentDataStatesAbbreviationArr.join(' | ');
          return { ...obj, [LICENSE_STATES]: states };
        });
      })
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
