import { YEARLY_INCOME } from '../configs/header-accessors';

const convertYearlyIncomeToDecimal = (data) => {
  return data.map((obj) => {
    const value = obj[YEARLY_INCOME];
    if (typeof value === 'number' && !Number.isNaN(value)) {
      return {
        ...obj,
        [YEARLY_INCOME]: Number.parseFloat(value).toFixed(2),
      };
    }
    return obj;
  });
};

export default convertYearlyIncomeToDecimal;
