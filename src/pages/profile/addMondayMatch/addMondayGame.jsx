import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

import "../style.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { errThrough, parsePlayerList } from "../../../utilities/function";
import { addGame, getGameById, updateGame } from "../../../apis/api";

const AddMondayGame = () => {
  const [state, setState] = useState({ loading: true });
  const { id, number } = useParams();
  const location = useLocation();
  const [currentGame, setCurrentGame] = useState({});
  const navigate = useNavigate();

  const [northTeams, setNorthTeams] = useState(parsePlayerList()?.north);
  const [southTeams, setSouthTeams] = useState(parsePlayerList()?.south);

  const saveGame = () => {
    const makePayload = {
      gameType: "MONDAY_SINGLES",
      northPlayers: [state?.northPlayer],
      southPlayers: [state?.southPlayer],
    };
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
  }, []);

  const updateTheGame = () => {
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
      <h4>Game {(id, number)}</h4>
      <h6 className="text-left">Team North</h6>
      <select
        name="northPlayer"
        required
        disabled={location.state}
        value={state.northPlayer}
        onChange={handleChange}
      >
        <option disabled value="" selected>
          Select Player
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
        name="southPlayer"
        required
        disabled={location.state}
        value={state.southPlayer}
        onChange={handleChange}
      >
        <option disabled value="" selected>
          Select Player
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

export default AddMondayGame;
