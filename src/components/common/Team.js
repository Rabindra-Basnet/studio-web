import React, { Component } from "react";
import TeamMember from "./TeamMember";

import t1 from "../assets/img/team/1.jpg";
import t2 from "../assets/img/team/2.jpg";
import t3 from "../assets/img/team/3.jpg";
const members = [
  {
    name: "Ram Dhami",
    role: "Frontend Develper",
    image: t1,
    icon: "fa - twitter",
  },
  { name: "Shyam Hungry", role: "UI/UX Designer", image: t2 },
  { name: "Hari Lala", role: "Backend Developer", image: t3 },
];
class Team extends Component {
  render() {
    return (
      // <!-- Team-->
      <section className="page-section bg-light" id="team">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
            <h3 className="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
          <div className="row">
            {members.map((member, i) => {
              return <TeamMember {...member} key={i} />;
            })}
          </div>
          <div class="row">
            <div class="col-lg-8 mx-auto text-center">
              <p class="large text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                eaque, laboriosam veritatis, quos non quis ad perspiciatis,
                totam corporis ea, alias ut unde.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Team;
