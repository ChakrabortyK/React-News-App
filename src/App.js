import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default class App extends Component {
  n = "kkk";
  render() {
    return (
      <>
        <Navbar />
        <News pageSize={9} />
      </>
    );
  }
}
