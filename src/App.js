import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const pageSize = 9;
  const apiKey = process.env.REACT_APP_API_KEY;

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
              pageSize={pageSize}
              apiKey={apiKey}
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
              pageSize={pageSize}
              apiKey={apiKey}
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
              pageSize={pageSize}
              apiKey={apiKey}
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
              pageSize={pageSize}
              apiKey={apiKey}
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
              pageSize={pageSize}
              apiKey={apiKey}
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
              pageSize={pageSize}
              apiKey={apiKey}
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
              pageSize={pageSize}
              apiKey={apiKey}
              country={"in"}
              category={"technology"}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
