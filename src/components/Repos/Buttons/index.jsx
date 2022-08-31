import React from "react";

import "./Buttons.css";

const Buttons = () => {
  return (
    <>
      <section id="btnBg">
        <button className="btn">Type <i className="fa-solid fa-caret-down"></i></button>
        <button className="btn">Language <i className="fa-solid fa-caret-down"></i></button>
        <button className="btn">Sort <i className="fa-solid fa-caret-down"></i></button>
      </section>
    </>
  );
};

export default Buttons;
