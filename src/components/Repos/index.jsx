import React from "react";

import Buttons from "./Buttons";
import Footer from "./Footer";
import Form from "./Form";
import RepoLinks from "./RepoLinks";

const Repos = ({ repoData }) => {
  return (
    <>
      <Form repoData={repoData} />
      <Buttons />
      <h4>Repositories</h4>
      <section id="repoLinksBg">
        {repoData.map((repo) => (
          <>
            <RepoLinks
              key={repo["id"]}
              repoName={repo["name"]}
              url={repo["svn_url"]}
              repoData={repoData}
            />
            <hr className="repo_divider" />
          </>
        ))}
      </section>
      <Footer />
    </>
  );
};

export default Repos;
