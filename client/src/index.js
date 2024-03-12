import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { CategoriesContext } from "./utils/context";
// import { BrowserRouter as Router } from "react-router-dom";

// import { Router } from "express";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
