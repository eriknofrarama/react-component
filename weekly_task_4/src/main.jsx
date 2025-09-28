import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // panggil App
import "./index.css"; // style global (default dari vite)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App /> {/* jalankan App */}
  </React.StrictMode>
);
