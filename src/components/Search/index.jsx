import React from "react";
import axios from "axios";
import { useEffect } from "react";

const Search = () => {
  useEffect(() => {}, []);

  const handleInput = (e) => {
    const newInput = e.target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
        />
      </form>
    </>
  );
};

export default Search;
