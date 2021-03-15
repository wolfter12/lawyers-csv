import phone from 'phone';

const phoneFormatter = (phoneNumber) => {
  const [number = '', code = ''] = phone(phoneNumber);
  if (number.length === 12 || code === 'USA') {
    return number;
  }
  return phoneNumber;
};

export default phoneFormatter;
