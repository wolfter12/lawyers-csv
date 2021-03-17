import statesJSON from '../configs/states_titlecase.json';

const licenseStatesFormatter = (value) => {
  const statesArr = value.split(/\s*\|\s*/);
  const statesAbbreviationArr = statesArr.map((str) => {
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
  return statesAbbreviationArr.join(' | ');
};

export default licenseStatesFormatter;
