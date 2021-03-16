import React from 'react';
import { useSelector } from 'react-redux';
import UploadFile from '../UploadFile';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from '../Table';
import Warning from '../Warning';
import Container from 'react-bootstrap/Container';

function App() {
  const valid = useSelector((state) => state.valid);
  return (
    <Container fluid>
      <UploadFile />
      {valid ? <Table /> : <Warning />}
      {valid && <UploadFile />}
    </Container>
  );
}

export default App;
