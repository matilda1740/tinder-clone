import React from "react";
import "./Message.css";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

export default function Message({ name, message, timestamp, profilePic }) {
  return (
    <Link to={`/chats/${name}`}>
      <div className="message">
        <Avatar className="message__image" src={profilePic} />

        <div className="message__details">
          <h3>{name}</h3>
          <p>{message}</p>
        </div>

        <p className="message__timestamp">{timestamp}</p>
      </div>
    </Link>
  );
}
