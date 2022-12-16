import React from "react";
import { ReactComponent as Logo } from "../assets/images/logo-header.svg";
import Navigation from "./Navigation";
import "../styles/Header.css";

const Header = ({ page }) => {
  return (
    <header>
      <Logo className="header-logo" />
      <Navigation page={page} />
    </header>
  );
};

export default Header;
