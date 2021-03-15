import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { parseFile } from '../../actions/dataActions';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <Form.Group>
        <Form.File
          label="Example file input"
          accept=".csv"
          onChange={changeHandler}
        />
      </Form.Group>
      <Button onClick={parseSelectedFile}>Parse file</Button>
      <Button onClick={showData}>Show Data</Button>
    </div>
  );
}

export default UploadFile;
