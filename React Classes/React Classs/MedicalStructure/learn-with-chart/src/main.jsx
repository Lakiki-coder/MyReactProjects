
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  // Wrap the App component with BrowserRouter to enable routing
  // Also using React.StrictMode for highlighting potential problems in the application due to deprecated APIs and other issues
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
