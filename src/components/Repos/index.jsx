import React from "react";

import "./Repos.css";

const Repos = () => {
  return (
    <>
      <form action="#" method="get" id="repoFormBg">
        <button className="search-button">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>

        <input
          type="text"
          placeholder="Find a repository..."
          className="repo_search"
        />
      </form>
    </>
  );
};

export default Repos;
