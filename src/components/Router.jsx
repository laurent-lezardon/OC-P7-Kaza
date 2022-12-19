import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
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
      {/* autres routes renvoi vers page d'erreur*/}
      <Route path="*" element={<Navigate to="/error-page" />} />
    </Routes>
  );
};

export default Router;
