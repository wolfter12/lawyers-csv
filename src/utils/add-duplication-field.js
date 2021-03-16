const addDuplicationField = (arr) => {
  return arr.map((obj) => {
    const { id, phone, email } = obj;
    let targetIdx = arr.findIndex((item) => {
      return (item.phone === phone || item.email === email) && item.id !== id;
    });
    const duplicateWith = targetIdx === -1 ? '' : arr[targetIdx].id;
    return { ...obj, duplicateWith };
  });
};

export default addDuplicationField;
