import phone from 'phone';

// TODO: ask client about conditions
// TODO: move regex to constants
const phoneFormatter = (phoneNumber) => {
  const isValid =
    /^\+1\d{10}$/.test(phoneNumber) ||
    /^1\d{10}$/.test(phoneNumber) ||
    /^\d{10}$/.test(phoneNumber);
  if (isValid) {
    return phone(phoneNumber)[0];
  }
  return phoneNumber;
};

export default phoneFormatter;
