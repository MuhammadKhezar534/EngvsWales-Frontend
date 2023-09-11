import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../style.css";
import { deleteGame, getGames } from "../../../apis/api";
import { errThrough } from "../../../utilities/function";
import Loader from "../../../components/Loader";

const AddSundayMatch = () => {
  const navigate = useNavigate();
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchGames = () => {
    setLoading(true);
    getGames("MONDAY_SINGLES")
      .then((resp) => {
        setGames(resp?.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        errThrough(err, navigate);
      });
  };

  const gameRemove = (gameId) => {
    deleteGame(gameId)
      .then((resp) => {
        fetchGames();
      })
      .catch((err) => {
        errThrough(err, navigate);
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
        <button className="mr-0" onClick={() => navigate("add-game")}>
          Add Game
        </button>
      )}

      {games?.map((game, index) => (
        <div key={game?._id}>
          <div
            style={{
              display: "flex",
              marginBottom: "5px",
              alignItems: "baseline",
              justifyContent: "center",
            }}
          >
            <h4 style={{ marginBottom: "5px" }}>Game {index + 1}</h4>
            <img
              src="/images/delete.png"
              alt="delete"
              style={{
                height: "20px",
                margin: "10px 0px 0px 10px",
                cursor: "pointer",
              }}
              onClick={() => gameRemove(game?._id)}
            />
          </div>

          {game?.northPlayers?.map((pla) => (
            <span>{pla} </span>
          ))}
          <span style={{ color: "#000", fontWeight: "bold" }}>VS </span>
          {game?.southPlayers?.map((pla) => (
            <span>{pla}</span>
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
