import React from "react";
import { ReactComponent as Logo } from "../assets/images/logo_Kaza.svg";
import Navigation from "./Navigation";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
