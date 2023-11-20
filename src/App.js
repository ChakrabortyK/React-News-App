import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Route, Routes } from "react-router-dom";

export default class App extends Component {
  pageSize = 9;
  render() {
    return (
      <>
        <Navbar />
        <Routes basename="/NewsApp">
          <Route
            exact
            path="/"
            element={
              <News
                key="General"
                pageSize={this.pageSize}
                country={"in"}
                category={"general"}
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                key="Business"
                pageSize={this.pageSize}
                country={"in"}
                category={"business"}
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                key="Entertainment"
                pageSize={this.pageSize}
                country={"in"}
                category={"entertainment"}
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                key="Health"
                pageSize={this.pageSize}
                country={"in"}
                category={"health"}
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                key="Science"
                pageSize={this.pageSize}
                country={"in"}
                category={"science"}
              />
            }
          />
          <Route
            exact
            path="/Sports"
            element={
              <News
                key="sports"
                pageSize={this.pageSize}
                country={"in"}
                category={"sports"}
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                key="Technology"
                pageSize={this.pageSize}
                country={"in"}
                category={"technology"}
              />
            }
          />
        </Routes>
      </>
    );
  }
}
