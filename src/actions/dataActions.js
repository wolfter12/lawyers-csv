import { PARSE_FILE, VALID_STRUCTURE, DELETE_DATA, LOADING } from './types';
import { WARNING_MESSAGE } from '../configs/constants';
import csv from '../parser/csv';
import requiredFieldValidator from '../utils/csv-required-fields-validator';
import addId from '../utils/add-id';
import addDuplicationField from '../utils/add-duplication-field';

// TODO: convert all boolean to string
// TODO: ask the client about a range of input formats
export const parseFile = (file) => (dispatch) => {
  if (file instanceof Blob) {
    csv(file)
      .then(({ data }) => requiredFieldValidator(data)) // Validation of required fields - fullName, phone, email
      .then((data) => {
        // if everything ok then data structure is valid
        dispatch({
          type: VALID_STRUCTURE,
          valid: true,
        });
        return data;
      })
      .then(addId) // Add id
      .then(addDuplicationField) // Add duplicate with first found ID
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
      })
      .finally(() => {
        dispatch({
          type: LOADING,
          loading: false,
        });
      });
  }
};

export const deleteData = () => (dispatch) => {
  dispatch({
    type: DELETE_DATA,
  });
};

export const changeIsLoading = (loading) => (dispatch) => {
  dispatch({
    type: LOADING,
    loading,
  });
};
