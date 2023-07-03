import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { CV } from "./components/cv/data/cv.types";
import cvData from "./components/cv/data/cv-data";
import cvSchema from "./components/cv/data/cv-schema";
import reportWebVitals from "./reportWebVitals";
import DataValidator from "./data-validator";
import { JSONSchemaType } from "ajv";

// TODO: move this data validator to other place, and to make a specific validator for all data types
const validator = new DataValidator<CV>(
  cvSchema as unknown as JSONSchemaType<CV>
);
if (validator.validateData(cvData)) {
  console.log("JSON data is valid.");
} else {
  console.log("JSON data is invalid.");
  console.log("cvData", cvData);
  console.log("validator.getErrors()", validator.getErrors());
}

const rootElement = document.getElementById("root");

if (rootElement instanceof HTMLElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
