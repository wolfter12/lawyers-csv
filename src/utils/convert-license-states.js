import statesJSON from '../configs/states_titlecase.json';
import { LICENSE_STATES } from '../configs/header-accessors';

const convertLicenseStates = (data) => {
  return data.map((obj) => {
    const currentDataStates = obj[LICENSE_STATES].split(/\s*\|\s*/);
    const currentDataStatesAbbreviationArr = currentDataStates.map((str) => {
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
    });
    const states = currentDataStatesAbbreviationArr.join(' | ');
    return { ...obj, [LICENSE_STATES]: states };
  });
};

export default convertLicenseStates;
