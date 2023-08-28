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
        {/* <img
          className="add-player-icon"
          src="/images/add-player.png"
          alt="add-player"
          onClick={() => navigate("/add-player")}
        /> */}
      </div>
      <h3>Add Sunday Fourballs Match</h3>
      <button onClick={() => navigate("/add-sunday-match")}>Add Match</button>
      <h3>Add Monday Singles Match</h3>
      <button onClick={() => navigate("/add-monday-match")}>Add Match</button>
    </div>
  );
};

export default UserProfile;
