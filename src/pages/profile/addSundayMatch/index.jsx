import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../style.css";
import { getGames } from "../../../apis/api";
import { errThrough } from "../../../utilities/function";
import Loader from "../../../components/Loader";

const AddSundayMatch = () => {
  const navigate = useNavigate();
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchGames = () => {
    setLoading(true);
    getGames("SUNDAY_FOURBALLS")
      .then((resp) => {
        setGames(resp?.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        errThrough(err, navigate);
      });
  };

  useEffect(() => {
    fetchGames();
    // eslint-disable-next-line
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
      <h2>Add Sunday Fourballs Match</h2>

      {games?.length < 6 && (
        <button className="mr-0" onClick={() => navigate("add-game")}>
          Add Game
        </button>
      )}

      {games?.map((game, index) => (
        <div key={game?._id}>
          <h4 style={{ marginBottom: "5px" }}>Game {index + 1}</h4>
          {game?.northPlayers?.map((pla) => (
            <span>{pla} </span>
          ))}
          <span style={{ color: "#000", fontWeight: "bold" }}>VS </span>
          {game?.southPlayers?.map((pla) => (
            <span>{pla} </span>
          ))}
          <div style={{ marginTop: "10px" }}>
            <button
              className="ml-12"
              onClick={() => navigate("add-game/" + game?._id, { state: true })}
            >
              Update Score
            </button>
          </div>
        </div>
      ))}
      <Loader loading={loading} />
    </div>
  );
};

export default AddSundayMatch;
