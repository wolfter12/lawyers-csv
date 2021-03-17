const yearlyIncomeFormatter = (value) => {
  const number = Number(value);
  if (Number.isNaN(number)) {
    return value;
  }
  return String(Number.parseFloat(number).toFixed(2));

  // return data.map((obj) => {
  //   const value = obj[YEARLY_INCOME];
  //   if (typeof value === 'number' && !Number.isNaN(value)) {
  //     return {
  //       ...obj,
  //       [YEARLY_INCOME]: Number.parseFloat(value).toFixed(2),
  //     };
  //   }
  //   return obj;
  // });
};

export default yearlyIncomeFormatter;
