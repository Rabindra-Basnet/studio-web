import React, { Component } from "react";

class Field extends Component {
  render() {
    return (
      <div className="form-group">
        {/* <!-- Name input--> */}
        {this.props.elementName === "input" ? (
          <input
            className="form-control"
            id="name"
            type="text"
            placeholder="Your Name *"
            data-sb-validations="required"
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
        ) : (
          <textarea
            className="form-control"
            id="message"
            placeholder="Your Message *"
            data-sb-validations="required"
            value={this.state.message}
            onChange={(e) => this.setState({ message: e.target.value })}
          />
        )}
        <div className="invalid-feedback" data-sb-feedback="name:required">
          A name is required.
        </div>
      </div>
    );
  }
}

export default Field;
