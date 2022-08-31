import React from "react";

import "./RepoLinks.css";

const RepoLinks = () => {
  return (
    <>
      <h4>Repositories</h4>

      <section id="repoLinksBg">
        <ul id="listBg">
          <li>
            <a href="#">bhatia-cohort</a>
            <span className="public_private">Public</span>
          </li>
          <li>Cohort repository for Bhatia</li>
        </ul>

        <div id="iconBg">
          <span>
            <i class="fa-solid fa-circle"></i> JavaScript
          </span>
          <span>
            <i class="fa-solid fa-code-fork"></i>1
          </span>
          <span>
            <i class="fa-solid fa-star"></i>0
          </span>
          <span>
            <i class="fa-solid fa-circle-dot"></i>1
          </span>
          <span>
            <i class="fa-solid fa-code-pull-request"></i>1
          </span>
          <span>Updated 20 days ago</span>
        </div>
      </section>

      <section id="repoLinksFooterBg">
        <button>
          <i class="fa-solid fa-chevron-left"></i> Previous
        </button>
        <button>
          Next <i class="fa-solid fa-chevron-right"></i>
        </button>
      </section>
    </>
  );
};

export default RepoLinks;
