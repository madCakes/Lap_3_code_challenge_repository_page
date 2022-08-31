import React from "react";

import "./RepoLinks.css";

const RepoLinks = ({ repoName, url, repoData }) => {
  return (
    <>
      <ul id="listBg">
        <li>
          <a href={url} target="_blank">
            {repoName}
          </a>
          <span className="public_private">Public</span>
        </li>
        <li>Cohort repository for Bhatia</li>
      </ul>

      <div id="iconBg">
        <span>
          <i className="fa-solid fa-circle"></i> JavaScript
        </span>
        <span>
          <i className="fa-solid fa-code-fork"></i>1
        </span>
        <span>
          <i className="fa-solid fa-star"></i>0
        </span>
        <span>
          <i className="fa-solid fa-circle-dot"></i>1
        </span>
        <span>
          <i className="fa-solid fa-code-pull-request"></i>1
        </span>
        <span>Updated 20 days ago</span>
      </div>
    </>
  );
};

export default RepoLinks;
