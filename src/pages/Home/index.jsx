import React from "react";
import { MainHeader, Repos, Search } from "../../components";

const Home = () => {
  return (
    <>
      <MainHeader />
      <main>
        <Repos />
        <Search />
      </main>
    </>
  );
};

export default Home;
