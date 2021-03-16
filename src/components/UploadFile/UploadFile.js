import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ReactFileReader from 'react-file-reader';
import { parseFile } from '../../actions/dataActions';
import { Button, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

const uploadOptions = {
  fileTypes: ['.csv'],
  multiplyFiles: false,
};

function UploadFile() {
  const [file, setFile] = useState({});

  const dispatch = useDispatch();

  const parseSelectedFile = () => {
    dispatch(parseFile(file));
    setFile({});
  };

  const handleFiles = (files) => {
    const [file] = files;
    const { name } = file;
    console.log(file);
    if (name.split('.').pop() === 'csv') {
      setFile(file);
    }
  };

  return (
    <Container fluid className="text-right mt-4 mb-4">
      <ReactFileReader
        fileTypes={['.csv']}
        multiplyFiles={false}
        handleFiles={handleFiles}
      >
        <Button>Import users</Button>
      </ReactFileReader>
      <Button onClick={parseSelectedFile}>Parse file</Button>
    </Container>
  );
}

export default UploadFile;
