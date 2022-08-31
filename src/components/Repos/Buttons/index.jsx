import React from "react";

import "./Buttons.css";

const Buttons = () => {
  return (
    <>
      <section id="btnBg">
        <button className="btn">Type <i class="fa-solid fa-caret-down"></i></button>
        <button className="btn">Language <i class="fa-solid fa-caret-down"></i></button>
        <button className="btn">Sort <i class="fa-solid fa-caret-down"></i></button>
      </section>
    </>
  );
};

export default Buttons;
