import _ from 'lodash';
import {
  PHONE,
  EMAIL,
  HAS_CHILDREN,
  YEARLY_INCOME,
  LICENSE_STATES,
} from './header-accessors';
import phoneFormatter from '../utils/phone-formatter';
import emailFormatter from '../utils/email-formatter';
import hasChildFormatter from '../utils/has-children-formatter';
import yearlyIncomeFormatter from '../utils/yearly-income-formatter';
import licenseStatesFormatter from '../utils/license-states-formatter';

// TODO: Check prevalidation in tables
// https://stackoverflow.com/questions/56219293/display-boolean-and-timestamp-values-inside-react-table-react-table-reacttyp#answer-58363447
const dataNormalize = (value, header) => {
  let str = _.trim(value, `'" `);

  switch (header) {
    case PHONE:
      return phoneFormatter(str);
    case EMAIL:
      return emailFormatter(str);
    case HAS_CHILDREN:
      return hasChildFormatter(str);
    case YEARLY_INCOME:
      return yearlyIncomeFormatter(str);
    case LICENSE_STATES:
      return licenseStatesFormatter(str);
    default:
      return str;
  }
};

const headerNormalize = (value) => _.camelCase(value.toLowerCase());

const options = {
  header: true,
  worker: false, // when true there is a problem with next parsing
  skipEmptyLines: true,
  transformHeader: headerNormalize,
  comments: true,
  transform: dataNormalize,
  dynamicTyping: false, // can be a problem with display data
};

export default options;
