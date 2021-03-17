import _ from 'lodash';
import phone from 'phone';
import { PHONE_FORMATS } from '../configs/constants';
import statesJSON from '../configs/states_titlecase.json';

// Phone
export const phoneFormatter = (phoneNumber) => {
  const isValid = PHONE_FORMATS.some((reg) => reg.test(phoneNumber));
  if (isValid) {
    return phone(phoneNumber)[0];
  }
  return phoneNumber;
};

// Email
export const emailFormatter = (str) => _.toLower(str);

// Yearly Income
export const yearlyIncomeFormatter = (value) => {
  const yearlyIncome = Number(value);
  if (Number.isNaN(yearlyIncome)) {
    return value;
  }
  return String(Number.parseFloat(yearlyIncome).toFixed(2));
};

// Has children
export const hasChildFormatter = (value) => {
  if (value.length === 0) {
    return 'false';
  }
  return value;
};

// License states
export const licenseStatesFormatter = (value) => {
  const statesArr = /\|/.test(value) ? value.split(/\s*\|\s*/) : [value];
  const statesAbbreviationArr = statesArr.filter(Boolean).map((str) => {
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
