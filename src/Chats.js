import React from "react";
import "./Chats.css";
import Message from "./Message";

export default function Chats() {
  return (
    <div className="chats">
      <Message
        name="PowerPuff Girls"
        message="Sugar........Spice........and Everything Nice"
        timestamp="30 minutes ago"
        profilePic="https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/Live-action-Powerpuff-Girls-700x300.jpg"
      />

      <Message
        name="The Life and Times of Juniper Lee"
        message="In a world full of montsters and demons ....... June is the only one who sees them :) GO, GO, GO ..... You can't stop the girl"
        timestamp="45 minutes ago"
        profilePic="https://m.media-amazon.com/images/M/MV5BMTBjMTExNDQtMDllNS00N2FlLWE1YzEtMWI0Mzk0ZTUyMTM0XkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_.jpg"
      />

      <Message
        name="Number 5"
        message="Codename Kids Next Door"
        timestamp="20 seconds ago"
        profilePic="https://pbs.twimg.com/profile_images/1198002362/65449_1766766093031_1355541210_31938489_2342453_n_400x400.jpg"
      />

      <Message
        name="Ed, Edd and Eddy"
        message="Jawbreakers!! Yuuuuuummmmmm!!"
        timestamp="45 minutes ago"
        profilePic="https://img1.looper.com/img/gallery/things-only-adults-notice-in-ed-edd-n-eddy/intro-1592506552.jpg"
      />

      <Message
        name="Fairy Odd Parents"
        message="Timmy Turner's an average kid, that no one understands..."
        timestamp="45 minutes ago"
        profilePic="https://i.pinimg.com/originals/ab/8e/3b/ab8e3baf3f9e1ce8be84f90537d014ce.png"
      />

      <Message
        name="Camp Lazlo"
        message="There were two scouts who made a friend and Lazlo was his anme OOOOOOOOOOOOOOO"
        timestamp="5 hours ago"
        profilePic="https://www.pngitem.com/pimgs/m/152-1524083_camp-lazlo-character-edward-the-platypus-angry-camp.png"
      />
    </div>
  );
}
