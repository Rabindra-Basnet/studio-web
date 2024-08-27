import React, { Component } from "react";
import logo from "./logo.svg";
import PageWrapper from "./components/PageWrapper";
import Home from "./components/Pages/Home";
import "./App.css";

class App extends Component {
  render() {
    return (
      <PageWrapper>
        <Home />
      </PageWrapper>
    );
  }
}

export default App;
