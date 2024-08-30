import React, { Component } from "react";
import Header from "../common/Header";
import image from "../assets/img/header-bg.jpg";

// Re-usable components
import Services from "../common/Services";
import Portfolio from "../common/Portfolio";
import Timeline from "../common/Timeline";
import Team from "../common/Team";
import Contact from "./Contact";
import Footer from "../common/Footer";
import Clients from "../common/Clients";

class Home extends Component {
  render() {
    return (
      <div>
        <Header
          title="Welcome To Our Studio!"
          subtitle="IT'S NICE TO MEET YOU"
          buttonText="Tell me more"
          link="/services"
          showButton={true}
          image={image}
        />
        <Services />
        <Portfolio />
        <Timeline />
        <Team />
        <Clients />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Home;
