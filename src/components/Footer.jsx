import React from "react";
import { ReactComponent as Logo } from "../assets/images/logo-footer.svg";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <Logo className="footer-logo" />
    </footer>
  );
};

export default Footer;
