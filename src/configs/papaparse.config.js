import _ from 'lodash';
import phoneFormatter from '../utils/phone-formatter';
import emailFormatter from '../utils/email-formatter';

const dataNormalize = (value, header) => {
  if (typeof value !== 'string') {
    return value;
  }
  let str = _.trim(value, `'" `);

  switch (header) {
    case 'phone':
      return phoneFormatter(str);

    case 'email':
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
