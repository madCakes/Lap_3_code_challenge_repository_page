import React, { useEffect, useState } from "react";
import axios from "axios";

import { Header, RepoCard, Repos, Search } from "../../components";

const Home = () => {
  const [repoData, setRepoData] = useState([]);
  const [repoNames, setRepoNames] = useState([]);
  const [searchString, setSearchString] = useState("madcakes");

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://api.github.com/users/${searchString}/repos`
        );
        // list of repo name
        let listOfRepos = data.map((repo) => {
          return repo["name"];
        });

        setRepoData(data);
        setRepoNames(listOfRepos);
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
        <div>
          {repoData.map((repo, i) => (
            <RepoCard
              key={repo["id"]}
              repoName={repo["name"]}
              url={repo["svn_url"]}
            />
          ))}
        </div>     
      <Header />
      <main>
        <Repos />
      </main>                    
    </>
  );
};

export default Home;
