import React from "react";
import Header from "./Header";
import "./App.css";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chats from "./Chats";
import Conversation from "./Conversation";

export default function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/chats/:person">
            <Header backButton="/chats" />
            <Conversation />
          </Route>

          <Route exact path="/chats">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route exact path="/">
            <Header />

            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
