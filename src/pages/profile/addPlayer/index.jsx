import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../style.css";
import { toast } from "react-toastify";
import { addPlayer, getPlayersList } from "../../../apis/api";
import { errThrough } from "../../../utilities/function";

const AddPlayer = () => {
  const [state, setState] = useState("");
  //   const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleAddPlayer = (payload) => {
    addPlayer(payload)
      .then((resp) => {
        toast.success("Player added successfully");
        getTeams("NORTH");
        getTeams("SOUTH");
        navigate("/profile");
      })
      .catch((err) => {
        errThrough(err);
      });
  };

  const getTeams = (teamType) => {
    getPlayersList(teamType)
      .then((resp) => {
        localStorage.setItem(teamType, JSON.stringify(resp?.data));
      })
      .catch((err) => {
        errThrough(err);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ state });

    const payload = {
      firstName: state?.firstName,
      lastName: state?.lastName,
      teamType: state?.team?.toUpperCase(),
      isCaptain: state?.captain ? true : false,
      playerBio: state?.bio,
      homeCourse: state?.homeCourse,
      favouriteClub: state?.favoriteClub,
      favouriteCourse: state?.favoriteCourse,
      dgaEvents: +state?.DGAEventsPlayed,
      topTenFinishes: +state?.top10Finish,
    };

    handleAddPlayer(payload);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <div className="d-flex">
          <img
            src="/images/back-arrow.png"
            onClick={() => navigate("/profile")}
            alt="back"
            className="cursor-pointer"
          />
        </div>
        <h2>Add Player</h2>
        <input
          type="text"
          required
          name="firstName"
          placeholder="First Name"
          value={state.firstName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={state.lastName}
          onChange={handleChange}
        />

        <select
          name="team"
          required
          placeholder="Select Team"
          value={state.team}
          onChange={handleChange}
        >
          <option disabled value="" selected>
            Select Team
          </option>
          <option value="north">North</option>
          <option value="south">South</option>
        </select>
        <label className="captain-label">
          Captain
          <input
            onChange={(e) => {
              setState((prev) => ({ ...prev, captain: e.target.checked }));
            }}
            type="checkbox"
            name="captain"
            value={state.captain}
          />
        </label>
        <textarea
          type="textarea"
          rows={6}
          name="bio"
          cols={6}
          placeholder="Enter player bio..."
          value={state.bio}
          onChange={handleChange}
        />

        <input
          type="text"
          name="homeCourse"
          placeholder="Home Course"
          value={state.homeCourse}
          onChange={handleChange}
        />

        <input
          type="text"
          name="favoriteClub"
          placeholder="Favourite Club"
          value={state.favoriteClub}
          onChange={handleChange}
        />
        <input
          type="text"
          name="favoriteCourse"
          placeholder="Favourite Course"
          value={state.favoriteCourse}
          onChange={handleChange}
        />
        <input
          type="number"
          name="DGAEventsPlayed"
          placeholder="DGA Events Played"
          value={state.DGAEventsPlayed}
          onChange={handleChange}
        />

        <input
          type="number"
          name="top10Finish"
          placeholder="Top 10 Finishes"
          value={state.top10Finish}
          onChange={handleChange}
        />

        <button type="submit" className="mb-12">
          Add Player
        </button>
        <button
          onClick={() => navigate("/profile")}
          type="button"
          className="cancel-button"
        >
          Cancel
        </button>

        {/* {error && <p className="login-error">{error}</p>} */}
      </form>
    </div>
  );
};

export default AddPlayer;
