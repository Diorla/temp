import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import UserContextProvider from "./userContext";
import CryptoContextProvider from "./cryptoContext";

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <CryptoContextProvider>
        <ToastContainer />
        <App />
      </CryptoContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
