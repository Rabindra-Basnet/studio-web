import React, { Component } from "react";
import logo from "./logo.svg";
import PageWrapper from "./components/PageWrapper";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Pages:
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Portfolio from "./components/common/Portfolio";

class App extends Component {
  render() {
    return (
      <Router>
        <PageWrapper>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route exact={true} path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/contact" Component={Contact} />
            <Route path="/portfolio" Component={Portfolio} />
          </Routes>
        </PageWrapper>
      </Router>
    );
  }
}

export default App;
