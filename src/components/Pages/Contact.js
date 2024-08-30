import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };
  }
  render() {
    return (
      // <!-- Contact-->
      <section className="page-section" id="contact">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Contact Us</h2>
            <h3 className="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
          {/* <!-- * * * * * * * * * * * * * * *-->
                      <!-- * * SB Forms Contact Form * *-->
                      <!-- * * * * * * * * * * * * * * *-->
                      <!-- This form is pre-integrated with SB Forms.-->
                      <!-- To make this form functional, sign up at-->
                      <!-- https://startbootstrap.com/solution/contact-forms-->
                      <!-- to get an API token!--> */}
          <form id="contactForm" data-sb-form-api-token="API_TOKEN">
            <div className="row align-items-stretch mb-5">
              <div className="col-md-6">
                <div className="form-group">
                  {/* <!-- Name input--> */}
                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    placeholder="Your Name *"
                    data-sb-validations="required"
                    value={this.state.name}
                    onChange={(e) => this.setState({ name: e.target.value })}
                  />
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="name:required"
                  >
                    A name is required.
                  </div>
                </div>
                <div className="form-group">
                  {/* <!-- Email address input--> */}
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    placeholder="Your Email *"
                    data-sb-validations="required,email"
                    value={this.state.email}
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="email:required"
                  >
                    An email is required.
                  </div>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="email:email"
                  >
                    Email is not valid.
                  </div>
                </div>
                <div className="form-group mb-md-0">
                  {/* <!-- Phone number input--> */}
                  <input
                    className="form-control"
                    id="phone"
                    type="tel"
                    placeholder="Your Phone *"
                    data-sb-validations="required"
                    value={this.state.phone}
                    onChange={(e) => this.setState({ phone: e.target.value })}
                  />
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="phone:required"
                  >
                    A phone number is required.
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group form-group-textarea mb-md-0">
                  {/* <!-- Message input--> */}
                  <textarea
                    className="form-control"
                    id="message"
                    placeholder="Your Message *"
                    data-sb-validations="required"
                    value={this.state.message}
                    onChange={(e) => this.setState({ message: e.target.value })}
                  />
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="message:required"
                  >
                    A message is required.
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Submit success message-->
                          <!---->
                          <!-- This is what your users will see when the form-->
                          <!-- has successfully submitted--> */}
            <div className="d-none" id="submitSuccessMessage">
              <div className="text-center text-white mb-3">
                <div className="fw-bolder">Form submission successful!</div>
                To activate this form, sign up at
                <br />
                <a href="https://startbootstrap.com/solution/contact-forms">
                  https://startbootstrap.com/solution/contact-forms
                </a>
              </div>
            </div>
            {/* <!-- Submit error message-->
                          <!---->
                          <!-- This is what your users will see when there is-->
                          <!-- an error submitting the form--> */}
            <div className="d-none" id="submitErrorMessage">
              <div className="text-center text-danger mb-3">
                Error sending message!
              </div>
            </div>
            {/* <!-- Submit Button--> */}
            <div className="text-center">
              <button
                className="btn btn-primary btn-xl text-uppercase disabled"
                id="submitButton"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Contact;

// import React, { Component } from "react";
// import Field from "../common/Field";

// const fields = {
//   sections: [
//     [
//       {
//         name: "name",
//         elementName: "input",
//         type: "text",
//         placeholder: "Enter Your Name *",
//       },
//       {
//         name: "email",
//         elementName: "input",
//         type: "email",
//         placeholder: "Enter Your Email *",
//       },
//       {
//         name: "phome",
//         elementName: "input",
//         type: "text",
//         placeholder: "Enter Your Phone Number *",
//       },
//     ],
//     [
//       {
//         name: "message",
//         elementName: "textarea",
//         type: "text",
//         placeholder: " Type your message *",
//       },
//     ],
//   ],
// };
// class Contact extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: "",
//       email: "",
//       phone: "",
//       message: "",
//     };
//   }

//   // submitForm = (e) => {
//   //   alert("Form Submitted Successfully!");
//   // };
//   render() {
//     return (
//       // <!-- Contact-->
//       <section className="page-section" id="contact">
//         <div className="container">
//           <div className="text-center">
//             <h2 className="section-heading text-uppercase">Contact Us</h2>
//             <h3 className="section-subheading text-muted">
//               Lorem ipsum dolor sit amet consectetur.
//             </h3>
//           </div>

//           <div classNamw="row">
//             <div className="col-lg-12">
//               <form id="contactForm" name="sentMessage" noValidate="noValidate">
//                 <div className="row">
//                   {fields.sections.map((section, sectionIndex) => {
//                     console.log(
//                       "Rendering section",
//                       sectionIndex,
//                       "with",
//                       section
//                     );
//                     return (
//                       <div className="col-md-6" key={sectionIndex}>
//                         {section.map((field, i) => {
//                           return (
//                             <Field
//                               {...field}
//                               key={i}
//                               value={this.state[field.name]}
//                               OnChange={(e) =>
//                                 this.setState({ [field.name]: e.taret.value })
//                               }
//                             />
//                           );
//                         })}
//                       </div>
//                     );
//                   })}
//                 </div>
//                 {/* <!-- Submit Button--> */}
//                 <div className="text-center">
//                   <button
//                     className="btn btn-primary btn-xl text-uppercase"
//                     id="submitButton"
//                     type="submit"
//                     // onClick={(e) => this.submitForm}
//                   >
//                     Send Message
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

// export default Contact;
