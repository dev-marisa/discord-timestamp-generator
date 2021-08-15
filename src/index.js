import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Container } from "@material-ui/core";

ReactDOM.render(
  <Container maxWidth="sm">
    <App />
  </Container>,
  document.getElementById('root')
);

