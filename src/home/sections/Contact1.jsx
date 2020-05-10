import React, { Component } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Fab, Icon } from "@material-ui/core";

class Contact1 extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  handleSubmit = (event) => {
    console.log("submitted");
    console.log(event);
  };

  handleChange = (event) => {
    event.persist();
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    let { name, email, subject, message } = this.state;
    return (
      <div className="section section-contact1 bg-light-gray" id="contact1">
        <div className="container">
          <div className="section__header">
            <h2>Send Us an Email</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              error.
            </p>
          </div>

          <ValidatorForm
            ref="form"
            onSubmit={this.handleSubmit}
            onError={(errors) => null}
          >
            <TextValidator
              className="mb-4 w-full"
              label="Name"
              onChange={this.handleChange}
              name="name"
              value={name}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />
            <TextValidator
              className="my-4 w-full"
              label="Email"
              onChange={this.handleChange}
              name="email"
              multiline
              value={email}
              validators={["required", "isEmail"]}
              errorMessages={["this field is required", "email is not valid"]}
            />
            <TextValidator
              className="my-4 w-full"
              label="Subject"
              onChange={this.handleChange}
              name="subject"
              value={subject}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />
            <TextValidator
              className="my-4 mb-8 w-full"
              label="Message"
              onChange={this.handleChange}
              name="message"
              multiline
              value={message}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />
            <Fab color="primary" type="submit">
              <Icon>send</Icon>
            </Fab>
          </ValidatorForm>
        </div>
      </div>
    );
  }
}

export default Contact1;
