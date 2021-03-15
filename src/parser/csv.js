import Papa from 'papaparse';
import options from '../configs/papaparse.config';

const csv = (file) => {
  return new Promise((complete, error) => {
    Papa.parse(file, { ...options, complete, error });
  });
};

export default csv;
