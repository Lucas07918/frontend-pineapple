import React from "react";
import ReactDOM from "react-dom/client";
import Template from "./page/template/Template";
import AppRoutes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Template>
        <AppRoutes />
      </Template>
    </Router>
  </React.StrictMode>
);
