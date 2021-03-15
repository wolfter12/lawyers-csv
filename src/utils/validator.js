import { PHONE } from '../configs/header-accessors';

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

const validator = (value, header) => {
  switch (header) {
    case PHONE:
      return isPhoneValid(value);
    default:
      return true;
  }
};

export default validator;
