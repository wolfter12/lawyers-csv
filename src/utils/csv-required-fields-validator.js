import Ajv from 'ajv';
import { FULL_NAME, PHONE, EMAIL } from '../configs/header-accessors';
import { WARNING_MESSAGE } from '../configs/constants';

const schema = {
  properties: {
    fullName: { type: 'string', minLength: 1 },
    phone: { type: 'string', minLength: 1 },
    email: { type: 'string', minLength: 1 },
  },
  required: [FULL_NAME, PHONE, EMAIL],
};

const csvRequiredFieldValidator = (data) => {
  return new Promise((resolve, reject) => {
    const ajv = new Ajv();
    const validate = ajv.compile(schema);
    const valid = data.every((obj) => validate(obj));
    if (valid) {
      resolve(data);
    }
    reject(WARNING_MESSAGE);
  });
};

export default csvRequiredFieldValidator;
