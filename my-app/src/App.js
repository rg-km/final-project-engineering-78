import React from "react";
import "./App.css";
import "@popperjs/core";
import "./bootstrap.min.css";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/register" element={<Daftar />} /> */}
          <Route path="/profile" element={<Profile />}/>
        </Routes>
      </BrowserRouter>

  );
}

export default App;
