const addId = (data) => {
  return data.map((obj, idx) => ({ id: idx + 1, ...obj }));
};

export default addId;
