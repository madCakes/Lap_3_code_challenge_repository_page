import React, { useState } from "react";

import "./Search.css"

const Search = ({ handleSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    const newInput = e.target.value;
    setInputValue(newInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(inputValue);
  };

  return (
    <>
      <form onSubmit={handleSubmit} role="form" id="searchFormBg">
        <label htmlFor="search-box">GitHub Account </label>
        <input
          type="text"
          name="search"
          id="search-box"
          onChange={handleInput}
          value={inputValue}
          required
        />
        <input type="submit" value="Search" />
      </form>
    </>
  );
};

export default Search;
