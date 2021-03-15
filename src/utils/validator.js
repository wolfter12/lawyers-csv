export const isFullNameValid = (value) => {
  if (typeof value !== 'string' || value.length === 0) {
    return false;
  }
  return true;
};

const validator = (value, header) => {
  switch (header) {
    default:
      return true;
  }
};

export default validator;
