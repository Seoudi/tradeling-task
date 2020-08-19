import React, { useEffect, useCallback, useState } from "react";
import { UserDTO } from "./IUser";
import { RepositoryDTO } from "./IRepository";
import { getDashboardData } from "./Dashboard";
import UserCard from "../userCard/UserCard";
import RepositoryCard from "../repositoryCard/RepositoryCard";
import { useSelector, useDispatch } from "react-redux";
import { selectText, selectSearchType } from "../searchContainer/searchSlice";
import { selectItems, updateItems } from "./dashboardSlice";
import { DashboardDataProps } from "./IDashboardData";
import "./dashboardContainer.css";
var debounce = require("lodash.debounce");

const DashboardContainer = () => {
  const items = useSelector(selectItems);
  const text = useSelector(selectText);
  const searchType = useSelector(selectSearchType);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const debounceSearch = useCallback(
    debounce((text: string, searchType: DashboardDataProps["searchType"]) => {
      getDashboardData({
        text: text,
        searchType: searchType,
      })
        .then((response) => {
          dispatch(updateItems(response));
          setLoading(false);
        })
        .catch((err) => {
          alert(err);
          setLoading(false);
        });
    }, 300),
    []
  );

  useEffect(() => {
    if (text.length > 2) {
      dispatch(updateItems([]));
      setLoading(true);
      debounceSearch(text, searchType);
    } else {
      dispatch(updateItems([]));
    }
  }, [text, searchType]);

  function isUser(items: (RepositoryDTO | UserDTO)[]): items is UserDTO[] {
    return (items as UserDTO[])[0].login !== undefined;
  }

  return (
    <div>
      {!loading ? (
        items &&
        items.length > 0 &&
        (isUser(items)
          ? items.map((item, i) => <UserCard item={item} />)
          : items.map((item, i) => (
              <RepositoryCard item={item as RepositoryDTO} />
            )))
      ) : (
        <img
          className="loading-img"
          src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
          alt=""
        />
      )}
    </div>
  );
};

export default DashboardContainer;
