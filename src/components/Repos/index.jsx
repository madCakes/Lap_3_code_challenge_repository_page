import React from "react";

import "./Repos.css";

const Repos = () => {
  return (
    <>
      <form action="#" method="get" id="repoFormBg">
        <i className="fa-solid fa-magnifying-glass search_button"></i>

        <input
          type="text"
          placeholder="Find a repository..."
          className="repo_search_input"
        />
      </form>
    </>
  );
};

export default Repos;
