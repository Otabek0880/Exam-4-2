import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Warehouse from "./components/Warehouse";
import Products from "./components/Products";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/warehouse" element={<Warehouse />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}
