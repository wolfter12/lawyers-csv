import { EMAIL, PHONE } from '../configs/header-accessors';
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

const validator = (value, header) => {
  switch (header) {
    case PHONE:
      return isPhoneValid(value);
    case EMAIL:
      return isEmailValid(value);
    default:
      return true;
  }
};

export default validator;
