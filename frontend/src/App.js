import React from "react";
import "./App.css";
import "@popperjs/core";
import "./bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import HomeUser from "./Pages/HomeUser";
import Daftar from "./Pages/Daftar";
import Profile from "./Pages/Profile";
import DeskripsiBuku from "./Pages/DeskripsiBuku";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homeUser" element={<HomeUser />} />
        <Route path="/register" element={<Daftar />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/deskripsi/:bookId" element={<DeskripsiBuku />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
