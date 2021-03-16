import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFileName } from '../../actions/fileActions';
import { parseFile } from '../../actions/dataActions';
import { Button, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

function UploadFile() {
  const [file, setFile] = useState({});
  const data = useSelector((state) => state.data);

  const dispatch = useDispatch();

  const changeHandler = (event) => {
    const file = event.target.files[0];
    dispatch(addFileName(file.name));
    setFile(file);
  };

  const parseSelectedFile = () => {
    dispatch(parseFile(file));
    setFile({});
  };

  const showData = () => {
    console.log('Parsed data:', data);
  };

  return (
    <Container fluid className="flex-column mt-4 mb-4">
      <Form.Group>
        <Form.File
          label="Example file input"
          accept=".csv"
          onChange={changeHandler}
        />
      </Form.Group>
      <Button onClick={parseSelectedFile}>Parse file</Button>
      <Button onClick={showData}>Show Data</Button>
    </Container>
  );
}

export default UploadFile;
