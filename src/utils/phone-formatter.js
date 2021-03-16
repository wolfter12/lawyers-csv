import phone from 'phone';
import { PHONE_FORMATS } from '../configs/constants';

// TODO: ask client about conditions
const phoneFormatter = (phoneNumber) => {
  const isValid = PHONE_FORMATS.some((reg) => reg.test(phoneNumber));
  if (isValid) {
    return phone(phoneNumber)[0];
  }
  return phoneNumber;
};

export default phoneFormatter;
