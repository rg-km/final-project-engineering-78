import React from "react";
import "./App.css";
import "@popperjs/core";
import "./bootstrap.min.css";
import Home from "./Pages/Home";
<<<<<<< HEAD
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <div>
        <Home />
      </div>
    </div>
=======
import Daftar from "./Pages/Daftar";
import Profile from "./Pages/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Daftar />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
>>>>>>> a4e7003163444944597348f5e776e4f16ee2fd79
  );
}

export default App;
