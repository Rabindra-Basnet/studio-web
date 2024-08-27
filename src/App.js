import React, { Component } from "react";
import logo from "./logo.svg";
import PageWrapper from "./components/PageWrapper";
import Home from "./components/Pages/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <PageWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </PageWrapper>
      </Router>
    );
  }
}

export default App;
