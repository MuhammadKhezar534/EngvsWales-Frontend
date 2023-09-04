import React from "react";
import { useNavigate } from "react-router-dom";

import "./style.css";

const UserProfile = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <h3>Add Player</h3>
        <button onClick={() => navigate("/add-player")}>Add Player</button>
      </div>

      <div>
        <h3>Players</h3>
        <button onClick={() => navigate("/update-player")}>
          Update Player
        </button>
      </div>
      <h3>Sunday Fourballs Matches</h3>
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button onClick={() => navigate("/add-sunday-match")}>
          Add Match / Results
        </button>
        {/* <button onClick={() => navigate("/sunday-fixtures")}></button> */}
      </div>
      <h3>Monday Singles Matches</h3>
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button onClick={() => navigate("/add-monday-match")}>
          Add Match / Results
        </button>
        {/* <button onClick={() => navigate("/monday-fixtures")}>Results</button> */}
      </div>
    </div>
  );
};

export default UserProfile;
