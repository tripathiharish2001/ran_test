import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <p>Bluetick Consultants LLP</p>
      <p>contact@bluetickconsultants.com</p>
      <p>
        <Link
          className="btnLink"
          href="https://www.threads.net/@bluetickconsultants"
        >
          Mail Us
        </Link>
      </p>
      <p>2024 © All rights reserved by Bluetick Consultants LLP</p>
    </footer>
  );
}

export default Footer;
