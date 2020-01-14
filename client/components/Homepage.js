import React from "react";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div>
      <button>
        <Link to="/admin-login">Admin-Login</Link>
      </button>
      <button>
        <Link to="/mentor-registration">Add-Mentor</Link>
      </button>
      <button>
        <Link to="/adding-task">Add-Task</Link>
      </button>
      <button>
        <Link to="/create-mentor">create-mentor</Link>
      </button>
      <button>
        <Link to="read-mentor">read-mentor</Link>
      </button>
    </div>
  );
}

export default HomePage;
