import React from "react";
import GithubImage from "../../assets/images/github.webp";
import { useSelector, useDispatch } from "react-redux";
import {
  updateSearchType,
  updateText,
  selectText,
  selectSearchType,
} from "./searchSlice";
import "./searchContainer.css";

const SearchContainer = () => {
  const text = useSelector(selectText);
  const searchType = useSelector(selectSearchType);
  const dispatch = useDispatch();
  return (
    <div className="search-container">
      <img className="search-container-image" src={GithubImage} alt="" />
      <div className="search-container-info">
        <h1 className="search-container-header">GitHub Searcher</h1>
        <p className="search-container-text">
          Search users or repositories below
        </p>
      </div>
      <div className="search-container-inputs">
        <input
          className="search-container-text-input"
          type="text"
          placeholder="Start typing to search .."
          onChange={(e) => dispatch(updateText(e.target.value))}
          value={text}
        />
        <select
          className="search-container-type-input"
          value={searchType}
          onChange={(e) => dispatch(updateSearchType(e.target.value))}
        >
          <option value="users">Users</option>
          <option value="repositories">Respositories</option>
        </select>
      </div>
    </div>
  );
};

export default SearchContainer;
