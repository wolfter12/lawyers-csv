import { AGE, EMAIL, PHONE } from '../configs/header-accessors';
import { validate as emailValidator } from 'email-validator';

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

const validator = (value, header) => {
  switch (header) {
    case PHONE:
      return isPhoneValid(value);
    case EMAIL:
      return isEmailValid(value);
    case AGE:
      return isAgeValid(value);
    default:
      return true;
  }
};

export default validator;
