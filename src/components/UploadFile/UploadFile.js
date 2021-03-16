import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { parseFile } from '../../actions/dataActions';
import { Button, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

function UploadFile() {
  const [file, setFile] = useState({});

  const dispatch = useDispatch();

  const changeHandler = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile !== undefined) {
      setFile(selectedFile);
    }
  };

  const parseSelectedFile = () => {
    dispatch(parseFile(file));
    setFile({});
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
    </Container>
  );
}

export default UploadFile;
