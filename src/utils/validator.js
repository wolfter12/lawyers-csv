import {
  AGE,
  EMAIL,
  EXPERIENCE,
  PHONE,
  YEARLY_INCOME,
} from '../configs/header-accessors';
import { validate as emailValidator } from 'email-validator';
import { MAX_YEARLY_INCOME } from '../configs/constants';

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
  const isValid =
    /^\+1\d{10}$/.test(value) ||
    /^1\d{10}$/.test(value) ||
    /^\d{10}$/.test(value);
  return isValid;
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
      return checkAge(Number(value));
    default:
      return false;
  }
};

// TODO: Ask a client about type of number (int or float)
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
      return checkExperience(Number(value), ageValue);
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
    default:
      return true;
  }
};

export default validator;
