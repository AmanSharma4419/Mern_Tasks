import React from "react";

class UpdateMentor extends React.Component {
  constructor() {
    super();
    this.state = {
      mentorname: "",
      mentoremail: "",
      mentorpassword: ""
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  //  Handle Ftech To Get Individual Mentor Details
  componentDidMount() {
    const id = this.props.match.params.mentor;
    fetch(`http://localhost:3000/api/v1/mentorCrud//individual/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(mentor => {
        this.setState({
          ...this.state,
          mentorname: mentor.mentor.name,
          mentoremail: mentor.mentor.email,
          mentorpassword: mentor.mentor.password
        });
      });
  }

  handleSubmit = e => {
    e.preventDefault();
    var mentorData = {
      name: this.state.mentorname,
      email: this.state.mentoremail,
      password: this.state.mentorpassword
    };
    // Handle Fetch To Update  Mentors
    const id = this.props.match.params.mentor;
    fetch(`http://localhost:3000/api/v1/mentorCrud/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(mentorData)
    })
      .then(res => res.json())
      .then(mentor => {
        this.props.history.push("/read-mentor");
      });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Type Username"
            value={this.state.mentorname}
            onChange={this.handleChange}
            name="mentorname"
          />
          <input
            type="email"
            placeholder="Type Email"
            value={this.state.mentoremail}
            onChange={this.handleChange}
            name="mentoremail"
          />
          <input
            type="password"
            placeholder="Type Password"
            value={this.state.mentorpassword}
            onChange={this.handleChange}
            name="mentorpassword"
          />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default UpdateMentor;
