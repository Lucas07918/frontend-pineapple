import React from "react";
import ReactDOM from "react-dom/client";
import Template from "./page/template/Template";
import AppRoutes from "./routes";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Template>
      <AppRoutes />
    </Template>
  </React.StrictMode>
);
