import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactFileReader from 'react-file-reader';
import {
  parseFile,
  deleteData,
  changeIsLoading,
} from '../../actions/dataActions';
import { changeValidity } from '../../actions/validationActions';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { IMPORT_BUTTON_VARIANT } from '../../configs/constants';

function UploadFile() {
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  const handleFiles = (files) => {
    if (!loading) {
      const [file] = files;
      if (file.name.split('.').pop() === 'csv') {
        dispatch(changeIsLoading(true));
        dispatch(parseFile(file));
      } else {
        dispatch(changeValidity(false));
        dispatch(deleteData());
      }
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
