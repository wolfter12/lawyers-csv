import React from 'react';
import { useDispatch } from 'react-redux';
import ReactFileReader from 'react-file-reader';
import { parseFile } from '../../actions/dataActions';
import { changeValidity } from '../../actions/validationActions';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { IMPORT_BUTTON_VARIANT } from '../../configs/constants';

function UploadFile() {
  const dispatch = useDispatch();

  const handleFiles = (files) => {
    const [file] = files;
    const { name } = file;
    if (name.split('.').pop() === 'csv') {
      dispatch(parseFile(file));
    } else {
      dispatch(changeValidity(false));
    }
  };

  return (
    <Container fluid="md" className="d-flex flex-row-reverse mt-4 mb-4">
      <ReactFileReader
        fileTypes={['.csv']}
        multiplyFiles={false}
        handleFiles={handleFiles}
      >
        <Button variant={IMPORT_BUTTON_VARIANT} size="lg">
          Import users
        </Button>
      </ReactFileReader>
    </Container>
  );
}

export default UploadFile;
