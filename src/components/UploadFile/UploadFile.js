import React from 'react';
import { useDispatch } from 'react-redux';
import ReactFileReader from 'react-file-reader';
import { parseFile } from '../../actions/dataActions';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

function UploadFile() {
  const dispatch = useDispatch();

  const handleFiles = (files) => {
    const [file] = files;
    const { name } = file;
    if (name.split('.').pop() === 'csv') {
      dispatch(parseFile(file));
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
    </Container>
  );
}

export default UploadFile;
