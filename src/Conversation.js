import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./Conversation.css";

export default function Conversation() {
  const [input, setInput] = useState();
  const [messages, setMessages] = useState([
    {
      name: "Number 5",
      image:
        "https://pbs.twimg.com/profile_images/1198002362/65449_1766766093031_1355541210_31938489_2342453_n_400x400.jpg",
      message: "There's a 104 days of summer vacation .... ",
    },
    {
      message: "And school comes along just to end it .... ",
    },
    {
      name: "Number 5",
      image:
        "https://pbs.twimg.com/profile_images/1198002362/65449_1766766093031_1355541210_31938489_2342453_n_400x400.jpg",
      message:
        "So the annual problem for our generation is finding a good way to spend it .... ",
    },
    {
      message: "LIKE MAYBE !!!!!!",
    },
    {
      name: "Number 5",
      image:
        "https://pbs.twimg.com/profile_images/1198002362/65449_1766766093031_1355541210_31938489_2342453_n_400x400.jpg",
      message:
        "Building a rocket, or  Fighting a Mummy or Climbing up the Eiffel Tower .... ",
    },
    {
      message:
        "Discovering something that doesn't exist or giving a monkey a shower ...",
    },
    {
      name: "Number 5",
      image:
        "https://pbs.twimg.com/profile_images/1198002362/65449_1766766093031_1355541210_31938489_2342453_n_400x400.jpg",
      message:
        "Flipping tidal waves, creating nano bots or locating Frankenstein's Brain .... ",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="conversation">
      <p className="conversation__timestamp">
        YOU MATCHED WITH NUMBER 5 ON 22/09/1987
      </p>
      {messages.map((text) =>
        text.name ? (
          <div className="conversation__message">
            <Avatar
              className="conversation__image"
              alt={text.name}
              src={text.image}
            />
            <p className="conversation__text">{text.message}</p>
          </div>
        ) : (
          <div className="conversation__message">
            <p className="conversation__textUser">{text.message}</p>
          </div>
        )
      )}

      <form className="input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="inputField"
          type="text"
          placeholder="IT'S OVER HEREEEEE!!!!!"
        />
        <button onClick={handleSend} type="submit" className="inputButton">
          Send Message
        </button>
      </form>
    </div>
  );
}
