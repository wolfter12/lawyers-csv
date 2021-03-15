import React from 'react';
import UploadFile from '../UploadFile';
import Table from '../Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <UploadFile />
      <Table />
    </div>
  );
}

export default App;
