import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

import "../style.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { errThrough, parsePlayerList } from "../../../utilities/function";
import {
  addGame,
  getGameById,
  getPlayersList,
  updateGame,
} from "../../../apis/api";

const AddGame = () => {
  const [state, setState] = useState({ loading: true });
  const [currentGame, setCurrentGame] = useState({});

  const [northTeams, setNorthTeams] = useState(parsePlayerList()?.north);
  const [southTeams, setSouthTeams] = useState(parsePlayerList()?.south);

  // const [northPlayer1, setNorthP1] = useState(null);
  // const [northPlayer2, setNorthP2] = useState(null);
  // const [southPlayer1, setSouthP1] = useState(null);
  // const [southPlayer2, setSouthP2] = useState(null);

  const { id, number } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const saveGame = () => {
    const makePayload = {
      gameType: "SUNDAY_FOURBALLS",
      northPlayers: [state?.northPlayer1, state?.northPlayer2],
      southPlayers: [state?.southPlayer1, state?.southPlayer2],
    };
    console.log({ makePayload });
    addGame(makePayload)
      .then((resp) => {
        toast.success("Successfully saved");
        navigate(-1);
      })
      .catch((err) => {
        errThrough(err);
      });
  };

  const getGameThroughId = (id) => {
    getGameById(id)
      .then((resp) => {
        console.log({ resp });
        setCurrentGame(resp?.data);
      })
      .catch((err) => {
        errThrough(err);
      });
  };

  useEffect(() => {
    if (id) {
      getGameThroughId(id);
    }
    getTeams("NORTH");
    getTeams("SOUTH");
  }, []);

  const getTeams = (teamType) => {
    getPlayersList(teamType)
      .then((resp) => {
        localStorage.setItem(teamType, JSON.stringify(resp?.data));
      })
      .catch((err) => {
        errThrough(err);
      });
  };

  const updateTheGame = () => {
    console.log({ state });
    const payload = {
      northScore: state?.northPoints ?? currentGame?.northScore,
      southScore: state?.southPoints ?? currentGame?.southScore,
    };

    updateGame(id, payload)
      .then((resp) => {
        toast.success("Successfully saved");
        navigate(-1);
      })
      .catch((err) => {
        errThrough(err);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // if (name === "north") {
    //   setNorthTeams([...northTeams?.filter((te) => te?.label !== value)]);
    // } else if (name === "south") {
    //   setSouthTeams([...southTeams?.filter((te) => te?.label !== value)]);
    // }
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    location.state ? handleScoreSubmit() : handleGameSubmit();
  };

  const handleScoreSubmit = () => {
    updateTheGame();
  };

  const handleGameSubmit = () => {
    saveGame();
  };

  return (
    <form
      className="login-form"
      onSubmit={handleSubmit}
      style={{ marginBottom: "80px" }}
    >
      <div className="d-flex">
        <img
          src="/images/back-arrow.png"
          onClick={() => navigate(-1)}
          alt="back"
          className="cursor-pointer"
        />
      </div>
      <h4>Game {number}</h4>
      <h6 className="text-left">Team North</h6>
      <select
        name="northPlayer1"
        required
        disabled={location.state}
        value={state.northPlayer1}
        onChange={handleChange}
      >
        <option disabled value="" selected>
          Select Player 1
        </option>
        {northTeams?.map((team) => (
          <option value={team?.label} key={team?.label}>
            {team?.label}
          </option>
        ))}
      </select>

      <select
        name="northPlayer2"
        required
        disabled={location.state}
        value={state.northPlayer2}
        onChange={handleChange}
      >
        <option disabled value="" selected>
          Select Player 2
        </option>
        {northTeams?.map((team) => (
          <option value={team?.label} key={team?.label}>
            {team?.label}
          </option>
        ))}
      </select>
      {location.state && (
        <input
          type="text"
          name="northPoints"
          placeholder="Enter Points"
          value={state.northPoints ?? currentGame?.northScore}
          onChange={handleChange}
        />
      )}

      <h6 className="text-left">Team South</h6>
      <select
        name="southPlayer1"
        required
        disabled={location.state}
        value={state.southPlayer1}
        onChange={handleChange}
      >
        <option disabled value="" selected>
          Select Player 1
        </option>
        {southTeams?.map((team) => (
          <option value={team?.label} key={team?.label}>
            {team?.label}
          </option>
        ))}
      </select>

      <select
        name="southPlayer2"
        required
        disabled={location.state}
        value={state.southPlayer2}
        onChange={handleChange}
      >
        <option disabled value="" selected>
          Select Player 2
        </option>
        {southTeams?.map((team) => (
          <option value={team?.label} key={team?.label}>
            {team?.label}
          </option>
        ))}
      </select>
      {location.state && (
        <input
          type="text"
          name="southPoints"
          placeholder="Enter Points"
          value={state.southPoints ?? currentGame?.southScore}
          onChange={handleChange}
        />
      )}

      <button type="submit" className="mb-12">
        {location.state ? "Add Score" : "Add Game"}
      </button>
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="cancel-button"
      >
        Cancel
      </button>
    </form>
  );
};

export default AddGame;
