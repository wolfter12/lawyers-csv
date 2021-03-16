import { PARSE_FILE, VALID_STRUCTURE } from './types';
import {
  HAS_CHILDREN,
  LICENSE_STATES,
  YEARLY_INCOME,
} from '../configs/header-accessors';
import { WARNING_MESSAGE } from '../configs/constants';
import statesJSON from '../configs/states_titlecase.json';
import csv from '../parser/csv';
import addId from '../utils/add-id';
import addDuplicationField from '../utils/add-duplication-field';
import requiredFieldValidator from '../utils/csv-required-fields-validator';

// TODO: convert all boolean to string
// TODO: ask the client about a range of input formats
// TODO: simplify callbacks
export const parseFile = (file) => (dispatch) => {
  if (file instanceof Blob) {
    csv(file)
      .then(({ data }) => requiredFieldValidator(data))
      .then((data) => {
        dispatch({
          type: VALID_STRUCTURE,
          valid: true,
        });
        return data;
      })
      .then((data) => addId(data))
      .then((data) => addDuplicationField(data))
      .then((data) => {
        return data.map((obj) => {
          const value = obj[YEARLY_INCOME];
          if (typeof value === 'number' && !Number.isNaN(value)) {
            return {
              ...obj,
              [YEARLY_INCOME]: Number.parseFloat(value).toFixed(2),
            };
          }
          return obj;
        });
      })
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
        console.error(err);
        if (err === WARNING_MESSAGE) {
          dispatch({
            type: VALID_STRUCTURE,
            valid: false,
          });
        }
      });
  }
};
