import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "../style.css";
import { toast } from "react-toastify";
import { addPlayer, getPlayerById, getPlayersList } from "../../../apis/api";
import { errThrough } from "../../../utilities/function";
import Loader from "../../../components/Loader";

const AddPlayer = () => {
  const [state, setState] = useState("");
  const { id = null } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [currentPlayer, setPlayer] = useState({});

  const handleAddPlayer = (payload) => {
    addPlayer(payload, id)
      .then((resp) => {
        toast.success("Player added successfully");
        getTeams("NORTH");
        getTeams("SOUTH");
        navigate("/profile");
      })
      .catch((err) => {
        errThrough(err, navigate);
      });
  };

  const getTeams = (teamType) => {
    getPlayersList(teamType)
      .then((resp) => {
        localStorage.setItem(teamType, JSON.stringify(resp?.data));
      })
      .catch((err) => {
        errThrough(err, navigate);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ state });

    const payload = {
      firstName: state?.firstName ?? currentPlayer?.firstName,
      lastName: state?.lastName ?? currentPlayer?.lastName,
      teamType: state?.team?.toUpperCase() ?? currentPlayer?.teamType,
      isCaptain: state?.captain ?? currentPlayer?.isCaptain ?? false,
      playerBio: state?.bio ?? currentPlayer?.playerBio,
      homeCourse: state?.homeCourse ?? currentPlayer?.homeCourse,
      favouriteClub: state?.favoriteClub ?? currentPlayer?.favouriteClub,
      favouriteCourse: state?.favoriteCourse ?? currentPlayer?.favouriteCourse,
      dgaEvents: +state?.DGAEventsPlayed ?? currentPlayer?.dgaEvents,
      topTenFinishes: +state?.top10Finish ?? currentPlayer?.topTenFinishes,
    };

    handleAddPlayer(payload);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (id) {
      getGameThroughId(id);
    }
    // eslint-disable-next-line
  }, []);

  const getGameThroughId = (id) => {
    setLoading(true);
    getPlayerById(id)
      .then((resp) => {
        setPlayer(resp?.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        errThrough(err, navigate);
      });
  };

  return (
    <div className="login-container" style={{ marginBottom: "80px" }}>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="d-flex">
          <img
            src="/images/back-arrow.png"
            onClick={() => navigate("/update-player")}
            alt="back"
            className="cursor-pointer"
          />
        </div>
        <h2> {id !== null ? "Edit Player" : "Add Player"}</h2>
        <input
          type="text"
          required
          name="firstName"
          placeholder="First Name"
          value={state.firstName ?? currentPlayer?.firstName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={state.lastName ?? currentPlayer?.lastName}
          onChange={handleChange}
        />

        <select
          name="team"
          required
          placeholder="Select Team"
          value={state.team ?? currentPlayer?.teamType?.toLowerCase()}
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
            value={state.captain ?? currentPlayer?.isCaptain}
            checked={state.captain ?? currentPlayer?.isCaptain}
          />
        </label>
        <textarea
          type="textarea"
          rows={6}
          name="bio"
          cols={6}
          placeholder="Enter player bio..."
          value={state.bio ?? currentPlayer?.playerBio}
          onChange={handleChange}
        />

        <input
          type="text"
          name="homeCourse"
          placeholder="Home Course"
          value={state.homeCourse ?? currentPlayer?.homeCourse}
          onChange={handleChange}
        />

        <input
          type="text"
          name="favoriteClub"
          placeholder="Favourite Club"
          value={state.favoriteClub ?? currentPlayer?.favouriteClub}
          onChange={handleChange}
        />
        <input
          type="text"
          name="favoriteCourse"
          placeholder="Favourite Course"
          value={state.favoriteCourse ?? currentPlayer?.favouriteClub}
          onChange={handleChange}
        />
        <input
          type="number"
          name="DGAEventsPlayed"
          placeholder="DGA Events Played"
          value={state.DGAEventsPlayed ?? currentPlayer?.dgaEvents}
          onChange={handleChange}
        />

        <input
          type="number"
          name="top10Finish"
          placeholder="Top 10 Finishes"
          value={state.top10Finish ?? currentPlayer?.topTenFinishes}
          onChange={handleChange}
        />

        <button type="submit" className="mb-12">
          {id !== null ? "Edit Player" : "Add Player"}
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
      <Loader loading={loading} />
    </div>
  );
};

export default AddPlayer;
