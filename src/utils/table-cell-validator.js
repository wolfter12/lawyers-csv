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
  MAX_AGE,
  MIN_YEARLY_INCOME,
  MAX_YEARLY_INCOME,
  MIN_AGE,
  PHONE_FORMATS,
  LICENSE_NUMBER_FORMATS,
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

export const isAgeValid = (value) => {
  const checkAge = (age) => {
    return (
      Number.isNaN(age) !== true &&
      Number.isInteger(age) &&
      age >= MIN_AGE &&
      age <= MAX_AGE
    );
  };
  const age = Number(value);
  return checkAge(age);
};

export const isExperienceValid = (value, age) => {
  const checkExperience = (number, currentAge) => {
    return number >= 0 && number <= currentAge - MIN_AGE;
  };
  const experienceNumber = Number(value);
  const ageNumber = Number(age);
  if (Number.isNaN(experienceNumber)) {
    return false;
  }
  if (Number.isNaN(ageNumber) || !Number.isInteger(ageNumber)) {
    return checkExperience(experienceNumber, MIN_AGE);
  }
  return checkExperience(experienceNumber, ageNumber);
};

export const isYearlyIncomeValid = (value) => {
  const checkYearlyIncome = (income) => {
    return income >= MIN_YEARLY_INCOME && income <= MAX_YEARLY_INCOME;
  };
  const yearlyIncomeNumber = Number(value);
  if (Number.isNaN(yearlyIncomeNumber)) {
    return false;
  }
  return checkYearlyIncome(yearlyIncomeNumber);
};

export const isExpirationDateValid = (value) => {
  const isValidFormat = moment(value, DATE_FORMATS, true).isValid();
  if (isValidFormat) {
    return moment().diff(value) <= 0;
  }
  return false;
};

export const isHasChildrenValid = (value) => {
  return value === 'true' || value === 'false' || value.length === 0;
};

export const isLicenseNumberValid = (value) => {
  return LICENSE_NUMBER_FORMATS.some((reg) => reg.test(value));
};

export const isLicenseStateValid = (value) => {
  const currentStates = /\|/.test(value) ? value.split(/\s*\|\s*/) : [value];
  return currentStates.filter(Boolean).every((str) => {
    return statesJSON.some(({ name, abbreviation }) => {
      return (
        name.toLowerCase() === str.toLowerCase() ||
        abbreviation.toLowerCase() === str.toLowerCase()
      );
    });
  });
};

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
