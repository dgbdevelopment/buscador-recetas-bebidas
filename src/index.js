import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import RecetasProvider from "context/RecetasContext";

ReactDOM.render(
  <React.StrictMode>
    <RecetasProvider>
      <App />
    </RecetasProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
