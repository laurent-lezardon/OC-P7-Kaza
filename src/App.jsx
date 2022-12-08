import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Header from "./components/Header";
// import Appartment from "./pages/Appartment";
// import APropos from "./pages/APropos";
// import Error from "./pages/Error";

import React from "react";

const App = () => {
  return (
    <div className="App">
      <Routes>
        {/* <Header /> */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/a-propos" element={<APropos />} />
        <Route path="/appartment/:id" element={<Appartment />} />
        <Route path="*" element={<Error />} /> */}
      </Routes>
    </div>
  );
};

export default App;
