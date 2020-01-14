import React from "react";

class DeleteMentor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleDelete = () => {
    var id = this.props.id;
    fetch(`http://localhost:3000/api/v1/mentorCrud/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(mentor => {
        console.log(mentor);
        alert("Mentor Deleted Sucessfully");
      });
  };
  render() {
    return <button onClick={this.handleDelete}>Delete</button>;
  }
}

export default DeleteMentor;
