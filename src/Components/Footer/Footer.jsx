import React from "react";
import { FaLinkedinIn, FaGithub, FaFacebook } from "react-icons/fa";

import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container container grid">
        <div className="footer_socials">
          <a
            href="https://www.linkedin.com/in/abdullah-gamal-mohamed/"
            target="_blank"
            className="footer_social-link"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/AbdullahGamal20"
            className="footer_social-link"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/abdalla.gamal.7121"
            className="footer_social-link"
            target="_blank"
          >
            <FaFacebook />
          </a>
        </div>

        <p className="footer_copyright text-cs">
          &copy; 2023
          <span> Abdullah.</span> All Rights Reserved
        </p>

        <p className="footer_copyright text-cs">
          Developed by
          <a
            href="https://www.linkedin.com/in/abdullah-gamal-mohamed/"
            target="_blank"
          >
            Abdullah Gamal
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
