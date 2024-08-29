import React, { Component } from "react";
import Header from "../common/Header";
import image from "../assets/img/about.jpg";
import Timeline from "../common/Timeline";
import Team from "../common/Team";

class About extends Component {
  render() {
    return (
      // <!-- About-->
      <div>
        <Header
          title=".About Us."
          subtitle="It is a great story"
          buttonText="Know Us"
          link="/footer"
          showButton={true}
          image={image}
        />
        <Timeline />
        <Team />
      </div>
    );
  }
}

export default About;
