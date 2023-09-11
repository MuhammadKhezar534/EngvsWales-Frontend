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
          <div
            style={{
              display: "flex",
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
          {game?.northPlayers?.map((pla, index) => (
            <span>
              {pla} {index === 0 ? "|" : ""}{" "}
            </span>
          ))}
          <span style={{ color: "#000", fontWeight: "bold" }}>VS </span>
          {game?.southPlayers?.map((pla, index) => (
            <span>
              {pla} {index === 0 ? "|" : ""}{" "}
            </span>
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
