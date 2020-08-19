import React from "react";
import { UserDTO } from "../dashboardContainer/IUser";
import "./userCard.css";

const UserCard = (props: { item: UserDTO }) => {
  const { item } = props;
  return (
    <div className="user-card-container">
      <div className="user-card">
        <img className="user-card-img" src={item.avatar_url} alt="" />
        <p className="user-card-name">{item.login}</p>
      </div>
    </div>
  );
};

export default UserCard;
