import React from "react";

import "./Tabs.css";

const Tabs = () => {
  return (
    <>
      <section id="bothTabsContainer">
        <div className="tab_title1">
          <i className="fa-solid fa-house"></i>
          <span>Overview</span>
        </div>

        <div className="tab_title2">
          <i className="fa-solid fa-book"></i>
          <span>Repositories <span id="repoCount">46</span></span>
        </div>

        <div className="tab_title3">
          <i className="fa-solid fa-ellipsis"></i>
        </div>
      </section>
    </>
  );
};

export default Tabs;
