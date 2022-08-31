import axios from "axios";
import React, { useState, useEffect } from "react";

import starterUsername from "./env";

const Search = () => {
  const [inputValue, setInputValue] = useState(starterUsername);
  const [repos, setRepos] = useState(`https://github.com/${inputValue}?tab=repositories`);

  // fetches data from github api
  useEffect(() => {
    fetch(
      `#`
    )
      .then((res) => res.json())
      .then((data) => {       
        setInputValue(data.inputValue);
      })
      .catch((err) => console.log(err));
  }, [repos]); // makes app re-run once

  const handleInput = (e) => {
    const newInput = e.target.value;
    setInputValue(newInput);    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRepos(inputValue);    
  };

  return (
    <>
      <form onSubmit={handleSubmit} role="form">
        <label htmlFor="search-box">GitHub Account </label>
        <input
          type="text"
          name="search"
          id="search-box"
          onChange={handleInput}
          value={inputValue} 
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Search;
