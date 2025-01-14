import React from 'react';
import { Button, TextField } from '@mui/material';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br />
        <br />
        <Button variant="contained">Click me</Button>
        <br />
        <br />
        <TextField label="Enter your name" />
      </header>
    </div>
  );
}

export default App;