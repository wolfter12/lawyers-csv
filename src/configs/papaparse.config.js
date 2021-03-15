import _ from 'lodash';

const dataNormalize = (value, header) => {
  if (typeof value !== 'string') {
    return value;
  }
  let str = _.trim(value, `'" `);
  if (header === 'email') {
    str = _.toLower(str);
  }
  return str;
};

const headerNormalize = (value) => _.camelCase(value.toLowerCase());

const options = {
  header: true,
  worker: false, // when true there is a problem with next parsing
  skipEmptyLines: true,
  transformHeader: headerNormalize,
  comments: true,
  transform: dataNormalize,
};

export default options;
