import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css"; 
import "./styles/home.css";
import App from "./app.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="min-h-screen w-full">
      <App />
    </div>
  </React.StrictMode>
);