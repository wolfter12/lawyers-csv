import { HAS_CHILDREN } from '../configs/header-accessors';

const convertHasChildren = (data) => {
  return data.map((obj) => {
    const hasChildren =
      obj[HAS_CHILDREN] != null ? String(obj[HAS_CHILDREN]) : 'false'; // if hasChildren is null(before was empty) then 'false'
    return { ...obj, [HAS_CHILDREN]: hasChildren };
  });
};

export default convertHasChildren;
