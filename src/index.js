import React from "react";
import ReactDOM from "react-dom/client";
import {Greeting, UserCard } from "./Greeting";
import Product, {Navbar}from "./Product";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <Greeting title = "Hola Mundo" name = "Bryan" />
    <Greeting title = "Hola React" name = "Toretto" />
    <Greeting title = "Si te pica es mi culebrita"/>
  </div>
);
