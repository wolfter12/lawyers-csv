import {
  AGE,
  EMAIL,
  EXPERIENCE,
  EXPIRATION_DATE,
  HAS_CHILDREN,
  LICENSE_NUMBER,
  LICENSE_STATES,
  PHONE,
  YEARLY_INCOME,
} from '../configs/header-accessors';
import { validate as emailValidator } from 'email-validator';
import {
  DATE_FORMATS,
  MAX_YEARLY_INCOME,
  PHONE_FORMATS,
} from '../configs/constants';
import moment from 'moment';
import statesJSON from '../configs/states_titlecase.json';

export const isFullNameValid = (value) => {
  if (typeof value !== 'string' || value.length === 0) {
    return false;
  }
  return true;
};

export const isPhoneValid = (value) => {
  if (typeof value !== 'string' || value.length === 0) {
    return false;
  }
  return PHONE_FORMATS.some((reg) => reg.test(value));
};

export const isEmailValid = (value) => {
  if (typeof value !== 'string' || value.length === 0) {
    return false;
  }
  return emailValidator(value);
};

// TODO: Ask the client about max age limit
export const isAgeValid = (value) => {
  // const checkAge = (age) => Number.isInteger(age) && age >= 21 && age <= 150;
  const checkAge = (age) => Number.isInteger(age) && age >= 21;
  switch (typeof value) {
    case 'number':
      return checkAge(value);
    case 'string':
      const ageNumber = Number(value);
      if (isNaN(ageNumber)) {
        return false;
      }
      return checkAge(ageNumber);
    default:
      return false;
  }
};

// TODO: Ask a client about type of number (int or float)
// TODO: Use constants instead of magic numbers
export const isExperienceValid = (value, age = 21) => {
  const checkExperience = (number, currentAge) => {
    return number >= 0 && number <= currentAge - 21;
  };
  const ageType = typeof age;
  const ageValue =
    ageType === 'number' ? age : ageType === 'string' ? Number(age) : 0;
  switch (typeof value) {
    case 'number':
      return checkExperience(value, ageValue);
    case 'string':
      const experienceNumber = Number(value);
      if (isNaN(experienceNumber)) {
        return false;
      }
      return checkExperience(experienceNumber, ageValue);
    default:
      return false;
  }
};

export const isYearlyIncomeValid = (value) => {
  const checkYearlyIncome = (income) => {
    return income >= 0 && income <= MAX_YEARLY_INCOME;
  };
  switch (typeof value) {
    case 'number':
      return checkYearlyIncome(value);
    case 'string':
      const yearlyIncomeNumber = Number(value);
      if (isNaN(yearlyIncomeNumber)) {
        return false;
      }
      return checkYearlyIncome(yearlyIncomeNumber);
    default:
      return false;
  }
};

export const isExpirationDateValid = (value) => {
  if (typeof value !== 'string') {
    return false;
  }
  const isValidFormat = moment(value, DATE_FORMATS, true).isValid();
  if (isValidFormat) {
    return moment().diff(value) <= 0;
  }
  return false;
};

// TODO: Empty string must display as false
export const isHasChildrenValid = (value) => {
  if (typeof value !== 'string') {
    return false;
  }
  return value === 'true' || value === 'false';
};

export const isLicenseNumberValid = (value) => {
  const checkLicenseNumber = (str) => /^[a-zA-Z0-9]{6}$/.test(str);
  switch (typeof value) {
    case 'string':
      return checkLicenseNumber(value);
    case 'number':
      return checkLicenseNumber(String(value));
    default:
      return false;
  }
};

export const isLicenseStateValid = (value) => {
  if (typeof value !== 'string' || value.length === 0) {
    return false;
  }
  const currentStates = value.split(/\s*\|\s*/);
  return currentStates.every((str) => {
    return statesJSON.some(({ name, abbreviation }) => {
      return (
        name.toLowerCase() === str.toLowerCase() ||
        abbreviation.toLowerCase() === str.toLowerCase()
      );
    });
  });
};

// TODO: Add exception for not important columns
const validator = (value, header, row) => {
  switch (header) {
    case PHONE:
      return isPhoneValid(value);
    case EMAIL:
      return isEmailValid(value);
    case AGE:
      return isAgeValid(value);
    case EXPERIENCE:
      return isExperienceValid(value, row.age);
    case YEARLY_INCOME:
      return isYearlyIncomeValid(value);
    case EXPIRATION_DATE:
      return isExpirationDateValid(value);
    case HAS_CHILDREN:
      return isHasChildrenValid(value);
    case LICENSE_NUMBER:
      return isLicenseNumberValid(value);
    case LICENSE_STATES:
      return isLicenseStateValid(value);
    default:
      return true;
  }
};

export default validator;
