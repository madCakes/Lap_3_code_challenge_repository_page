import React from "react";

import Buttons from "./Buttons";
import Footer from "./Footer";
import Form from "./Form";
import RepoLinks from "./RepoLinks";

const Repos = () => {
  return (
    <>
      <Form />
      <Buttons />
      <h4>Repositories</h4>
      <RepoLinks />
      <Footer />
    </>
  );
};

export default Repos;
