import React from 'react';
import UploadFile from '../UploadFile';
import Table from '../Table';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Container fluid>
      <UploadFile />
      <Table />
    </Container>
  );
}

export default App;
