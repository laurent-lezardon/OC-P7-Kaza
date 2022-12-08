import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Appartment from "./pages/Appartment";
import APropos from "./pages/APropos";
import Error from "./pages/Error";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <div className="kasa-app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/appartment/:id" element={<Appartment />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  </BrowserRouter>
);
