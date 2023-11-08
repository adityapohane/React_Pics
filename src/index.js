// import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import searchImages from "./api.js";
    
searchImages();
// get a reference to the div with ID Root
const el = document.getElementById("root");

// tell react to take control of that element
const root = ReactDOM.createRoot(el);

// show component on screen

root.render(<App />);
