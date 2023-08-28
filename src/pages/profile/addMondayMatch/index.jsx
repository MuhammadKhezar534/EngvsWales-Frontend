import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../style.css";
import { getGames } from "../../../apis/api";
import { errThrough } from "../../../utilities/function";

const AddSundayMatch = () => {
  const navigate = useNavigate();
  const [games, setGames] = useState([]);

  const fetchGames = () => {
    getGames("MONDAY_SINGLES")
      .then((resp) => {
        setGames(resp?.data);
      })
      .catch((err) => {
        errThrough(err);
      });
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <div>
      <div className="d-flex">
        <img
          src="/images/back-arrow.png"
          onClick={() => navigate("/profile")}
          alt="back"
          className="cursor-pointer"
        />
      </div>
      <h2>Add Monday Singles Match</h2>

      {games?.length < 12 && (
        <button className="mr-12" onClick={() => navigate("add-game")}>
          Add Game
        </button>
      )}

      {games?.map((game, index) => (
        <div key={game?._id}>
          <h4>Game {index + 1}</h4>
          <div>
            <button
              className="ml-12"
              onClick={() => navigate("add-game/" + game?._id, { state: true })}
            >
              Update Score
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddSundayMatch;
