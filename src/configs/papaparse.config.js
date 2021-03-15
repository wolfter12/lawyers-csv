import camelCase from 'camelcase';

const options = {
  header: true,
  worker: false, // when true there is a problem with next parsing
  skipEmptyLines: true,
  transformHeader: camelCase,
};

export default options;
