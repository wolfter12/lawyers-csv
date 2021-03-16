import { PARSE_FILE, VALID_STRUCTURE } from './types';
import { WARNING_MESSAGE } from '../configs/constants';
import csv from '../parser/csv';
import addId from '../utils/add-id';
import addDuplicationField from '../utils/add-duplication-field';
import requiredFieldValidator from '../utils/csv-required-fields-validator';
import convertYearlyIncome from '../utils/convert-yearly-income';
import convertHasChildren from '../utils/convert-has-children';
import convertLicenseStates from '../utils/convert-license-states';

// TODO: convert all boolean to string
// TODO: ask the client about a range of input formats
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
      .then(addId)
      .then(addDuplicationField)
      .then(convertYearlyIncome)
      .then(convertHasChildren)
      .then(convertLicenseStates)
      .then((data) => {
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
