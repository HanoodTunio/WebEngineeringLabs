import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CustomApp from "./CustomApp.jsx";
import Users, { UsersWithImages } from "./Users.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <UsersWithImages />
);
