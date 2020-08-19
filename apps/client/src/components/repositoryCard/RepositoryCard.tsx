import React from "react";
import { RepositoryDTO } from "../dashboardContainer/IRepository";
import "./repositoryCard.css";
var moment = require("moment");

const RepositoryCard = (props: { item: RepositoryDTO }) => {
  return (
    <div className="repository-card-container">
      <div className="repository-card">
        <p className="repository-card-name">{props.item.full_name}</p>
        <p className="repository-card-description">{props.item.description}</p>
        <div>
          <img
            className="repository-card-owner-img"
            src={props.item.owner.avatar_url}
            alt=""
          />
          <p className="repository-card-owner-name">{props.item.owner.login}</p>
        </div>
        <div>
          <p className="repository-card-language">{props.item.language}</p>
          <p className="repository-card-stars">
            &#9733; {props.item.stargazers_count}
          </p>
        </div>
        <p className="repository-card-created-at">
          Created at: {moment(props.item.created_at).fromNow()}
        </p>
        <p className="repository-card-updated-at">
          Last updated: {moment(props.item.updated_at).fromNow()}
        </p>
      </div>
    </div>
  );
};

export default RepositoryCard;
