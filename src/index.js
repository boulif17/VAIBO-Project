import ReactDOM from "react-dom/client";
import React from "react"; // لا تنسى استيراد React أيضًا
import App from "./App.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


