import React, { useEffect, useState } from "react";
import axios from "axios";

import { Search } from "../../components";

const Home = () => {
  const [repoData, setRepoData] = useState("");
  const [repoNames, setRepoNames] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const user = "madcakes";
        const { data } = await axios.get(
          `https://api.github.com/users/${user}/repos`
        );

        setRepoData(data);

        // list of repo name
        const listOfRepos = data.map((repo) => {
          return repo["name"];
        });

        setRepoNames(listOfRepos);

        console.log(repoData);
        console.log(repoNames);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <>
      <h1>Home</h1>
      <Search />
    </>
  );
};

export default Home;

const useAxiosPost = (url, payload) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.post(url, payload);
        setData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoaded(true);
      }
    })();
  }, []);
  return { data, error, loaded };
};
