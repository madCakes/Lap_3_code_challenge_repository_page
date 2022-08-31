import React from "react";
import axios from "axios";
import { useEffect } from "react";

const Search = () => {
  useEffect(() => {});
  return (
    <>
      <label htmlFor="search-box">GitHub Account </label>
      <input type="text" name="search" id="search-box" />
    </>
  );
};

export default Search;
