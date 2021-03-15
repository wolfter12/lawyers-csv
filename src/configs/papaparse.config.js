import _ from 'lodash';
import phoneFormatter from '../utils/phone-formatter';
import emailFormatter from '../utils/email-formatter';
import { PHONE, EMAIL } from './header-accessors';

// TODO: Check prevalidation in tables
// https://stackoverflow.com/questions/56219293/display-boolean-and-timestamp-values-inside-react-table-react-table-reacttyp#answer-58363447
const dataNormalize = (value, header) => {
  if (typeof value === 'number') {
    return value;
  }

  let str = _.trim(value, `'" `);

  switch (header) {
    case PHONE:
      return phoneFormatter(str);
    case EMAIL:
      return emailFormatter(str);
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
  dynamicTyping: true, // can be a problem with display data
};

export default options;
