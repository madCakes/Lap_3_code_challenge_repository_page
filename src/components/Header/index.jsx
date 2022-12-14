import React from "react";

import "./Header.css";
import companyLogo from "../../assets/companyLogo.png";
import Tabs from "../Tabs";

const Header = () => {
  return (
    <>
      <header id="headerBg">
        <div className="container">
          <img src={companyLogo} alt="Company Logo" className="company_logo" />

          <ul className="list_container">
            <li>
              <h3>futureproof</h3>
            </li>
            <li>
              <i className="fa-solid fa-link"></i>
              <a href="#">http://getfutureproof.co.uk/</a>
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <a href="#"> hello@getfutureproof.co.uk</a>
            </li>
            <li>
              <i className="fa-solid fa-building"></i>
              <a href="#">Part of futureproof</a>
            </li>
          </ul>
        </div>

        <button>Follow</button>
        <Tabs />
      </header>
    </>
  );
};

export default Header;
