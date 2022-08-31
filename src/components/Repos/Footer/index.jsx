import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <>
      <section id="repoLinksFooterBg">
        <button>
          <i className="fa-solid fa-chevron-left"></i> Previous
        </button>
        <button>
          Next <i className="fa-solid fa-chevron-right"></i>
        </button>
      </section>

      <footer id="footerBg">
        <span>Terms </span>
        <span>Privacy </span>
        <span>Security </span>
        <span>Status </span>
        <span>Docs </span>
        <span>Contact </span>
        <span>GitHub </span>
        <span>Pricing </span>
        <span>API </span>
        <span>Training</span>
        <span>Blog </span>
        <span>About</span>
        <p>
          <i className="fa-brands fa-github"></i> © 2022 GitHub, Inc.
        </p>
      </footer>
    </>
  );
};

export default Footer;
