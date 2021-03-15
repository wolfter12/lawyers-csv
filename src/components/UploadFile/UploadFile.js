import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { parseFile } from '../../actions/dataActions';

function UploadFile() {
  const [file, setFile] = useState({});
  const data = useSelector((state) => state.data);

  const dispatch = useDispatch();

  const changeHandler = (event) => {
    setFile(event.target.files[0]);
  };

  const parseSelectedFile = () => {
    dispatch(parseFile(file));
  };

  const showData = () => {
    console.log('Parsed data:', data);
  };

  return (
    <div>
      <input type="file" name="file" onChange={changeHandler} />
      <button onClick={parseSelectedFile}>Parse file</button>
      <button onClick={showData}>Show Data</button>
    </div>
  );
}

export default UploadFile;
