import React from "react";

class MentorRegister extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    var mentorData = {
      name: this.state.username,
      email: this.state.email,
      password: this.state.password
    };
    //   Method To Handle The Registeration of Mentors
    fetch("http://localhost:3000/api/v1/mentor/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(mentorData)
    })
      .then(res => res.json())
      .then(mentor => {
        mentor.mentor.name
          ? alert("Mentor Registred Sucessfully!")
          : alert("Please Check All Fields");
      });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Type Username"
            value={this.state.username}
            onChange={this.handleChange}
            name="username"
          />
          <input
            type="email"
            placeholder="Type Email"
            value={this.state.email}
            onChange={this.handleChange}
            name="email"
          />
          <input
            type="password"
            placeholder="Type Password"
            value={this.state.password}
            onChange={this.handleChange}
            name="password"
          />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default MentorRegister;
