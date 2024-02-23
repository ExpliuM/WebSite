import { BrowserRouter } from 'react-router-dom';

import ReactDOM from 'react-dom/client';

import { ICV } from './components/cv/data/cv.types';
import { JSONSchemaType } from 'ajv';
import App from './App';
import cvData from './components/cv/data/cv-data';
import cvSchema from './components/cv/data/schemas/cv-schema';
import DataValidator from './data-validator';
import React from 'react';
import reportWebVitals from './reportWebVitals';

// TODO: move this data validator to other place, and to make a specific validator for all data types
const validator = new DataValidator<ICV>(
  cvSchema as unknown as JSONSchemaType<ICV>,
);
if (validator.validateData(cvData)) {
  // console.log('JSON data is valid.');
} else {
  // console.log('JSON data is invalid.');
  // console.log('cvData', cvData);
  // console.log('validator.getErrors()', validator.getErrors());
}

const rootElement = document.getElementById('root');

if (rootElement instanceof HTMLElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
