import React from "react";

class AdminLogin extends React.Component {
  constructor() {
    super();
    this.state = {
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
    var adminData = {
      email: this.state.email,
      password: this.state.password
    };
    //   Method To Handle The Login of Admin Which Is Seeded Into Db
    fetch("http://localhost:3000/api/v1/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(adminData)
    })
      .then(res => res.json())
      .then(adminData => {
        console.log(adminData);
        adminData.token
          ? this.props.history.push("/admin-pannel")
          : alert("Please Check Admin Credentials");
      });
  };
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
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
      </React.Fragment>
    );
  }
}

export default AdminLogin;
