import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainLayout from "./areas/shared/pages/MainLayout";
import NotFound from "./areas/shared/pages/NotFound";
import Home from "./areas/home/pages/Home";
import About from "./areas/about/pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
