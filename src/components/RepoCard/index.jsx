import React from "react";

const RepoCard = ({ repoName, url }) => {
  return (
    <a href={url} target="blank">
      {repoName}
    </a>
  );
};

export default RepoCard;
