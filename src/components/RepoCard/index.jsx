import React from "react";

import "./RepoCard.css";

const RepoCard = ({ repoName, url }) => {
  return (
    <a href={url} target="blank">
      {repoName}
    </a>
  );
};

export default RepoCard;
