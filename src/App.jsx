import { React, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>

      <Route path="*" element={<h1>Page Not Found</h1>}></Route>
    </Routes>
  );
}

export default App;
