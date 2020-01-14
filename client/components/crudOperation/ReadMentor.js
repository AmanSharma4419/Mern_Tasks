import React from "react";
import { Link } from "react-router-dom";
import DeleteMentor from "./DeleteMentor";
class ReadMentor extends React.Component {
  constructor() {
    super();
    this.state = {
      mentorList: ""
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/api/v1/mentorCrud/read", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(mentor => {
        this.setState({ ...this.state, mentorList: mentor.mentor });
      });
  }
  render() {
    return (
      <React.Fragment>
        <h1>Mentor`s List</h1>
        {this.state.mentorList &&
          this.state.mentorList.map((mentor, i) => {
            return (
              <div key={i}>
                <h2>Name:{mentor.name}</h2>
                <h3>Email:{mentor.email}</h3>
                <DeleteMentor id={mentor._id} />
                <Link to={`/update-mentor/${mentor._id}`}>Update</Link>
              </div>
            );
          })}
      </React.Fragment>
    );
  }
}
export default ReadMentor;
