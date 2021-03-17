const hasChildFormatter = (value) => {
  if (value.length === 0) {
    return 'false';
  }
  return value;
};

export default hasChildFormatter;
