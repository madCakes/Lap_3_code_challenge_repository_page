import React, { useEffect, useState } from "react";
import axios from "axios";

import { Header, Repos, Search } from "../../components";

const Home = () => {
  const [repoData, setRepoData] = useState([]);
  const [searchString, setSearchString] = useState("madcakes");

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://api.github.com/users/${searchString}/repos`
        );

        setRepoData(data);
        console.log(repoData);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [searchString]);

  function handleSearch(userInput) {
    setSearchString(userInput);
  }

  return (
    <>
      <Search handleSearch={handleSearch} />
      <Header />
      <Repos repoData={repoData} />
    </>
  );
};

export default Home;
