import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Appartment from "../pages/Appartment";
import APropos from "../pages/APropos";
import Error from "../pages/Error";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/a-propos" element={<APropos />} />
      {/* route dynamique */}
      <Route path="/appartment/:id" element={<Appartment />} />
      {/* route pour le renvoi vers la page d'erreur */}
      <Route path="/error-page" element={<Error />} />
      {/* route par défaut */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Router;
