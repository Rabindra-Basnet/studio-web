import React, { Component } from "react";
import PortfolioItem from "./PortfolioItem";
import Header from "./Header";
import image from "../assets/img/about.jpg";

import img1 from "../assets/img/portfolio/1.jpg";
import img2 from "../assets/img/portfolio/2.jpg";
import img3 from "../assets/img/portfolio/3.jpg";
import img4 from "../assets/img/portfolio/4.jpg";
import img5 from "../assets/img/portfolio/5.jpg";
import img6 from "../assets/img/portfolio/6.jpg";
import Footer from "./Footer";

const portfolio = [
  { title: "Threads", subtitle: "Illustration", image: img1 },
  { title: "Explore", subtitle: "Graphic Design", image: img2 },
  { title: "Finish", subtitle: "Identity", image: img3 },
  { title: "Lines", subtitle: "Branding", image: img4 },
  { title: "South-West", subtitle: "Website Design", image: img5 },
  { title: "Window", subtitle: "Photography", image: img6 },
];

class Portfolio extends Component {
  render() {
    return (
      <>
        <div>
          <Header
            title=".About Us."
            subtitle="It is a great story"
            buttonText="Know Us"
            link="/footer"
            showButton={true}
            image={image}
          />
        </div>
        {/* // <!-- Portfolio Grid--> */}
        <section className="page-section bg-light" id="portfolio">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Portfolio</h2>
              <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
            <div className="row">
              {portfolio.map((item, index) => {
                return <PortfolioItem {...item} key={index} />;
              })}
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default Portfolio;
