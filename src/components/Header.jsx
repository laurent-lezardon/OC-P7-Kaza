import React from "react";
import { ReactComponent as Logo } from "../assets/images/logo-header.svg";
import Navigation from "./Navigation";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <Logo className="header-logo" />
      <Navigation />
    </header>
  );
};

export default Header;
