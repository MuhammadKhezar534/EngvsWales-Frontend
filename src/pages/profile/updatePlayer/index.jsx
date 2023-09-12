import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deletePlayer, getPlayersList } from "../../../apis/api";
import Loader from "../../../components/Loader";
import { errThrough } from "../../../utilities/function";

const UpdatePlayer = () => {
  const northPlyers = [...JSON.parse(localStorage.getItem("NORTH"))];

  const southPlayers = [...JSON.parse(localStorage.getItem("SOUTH"))];
  let navigate = useNavigate();

  const [northP, setNPlayer] = useState(northPlyers);
  const [southP, setSPlayer] = useState(southPlayers);
  const [loading, setLoading] = useState(false);

  const getTeams = (teamType) => {
    getPlayersList(teamType)
      .then((resp) => {
        if (teamType === "NORTH") {
          setNPlayer(resp?.data);
        } else setSPlayer(resp?.data);
        localStorage.setItem(teamType, JSON.stringify(resp?.data));
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        errThrough(err, navigate);
      });
  };

  const deletePlayers = (id) => {
    setLoading(true);
    deletePlayer(id)
      .then((resp) => {
        getTeams("NORTH");
        getTeams("SOUTH");
      })
      .catch((err) => {
        setLoading(false);
        errThrough(err, navigate);
      });
  };

  return (
    <div style={{ textAlign: "left" }}>
      <div className="d-flex" style={{ marginBottom: "20px" }}>
        <img
          src="/images/back-arrow.png"
          onClick={() => navigate("/profile")}
          alt="back"
          className="cursor-pointer"
        />
      </div>

      <h2 style={{ textAlign: "center" }}>North Players</h2>
      {northP?.length > 0 &&
        northP?.map((pl) => (
          <div key={pl?._id}>
            <h4 style={{ textAlign: "center" }}>Player Name:</h4>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
              }}
            >
              <span style={{ margin: "0px", minWidth: "150px" }}>
                {pl?.firstName + " " + pl?.lastName}
              </span>
              <button onClick={() => navigate(`/add-player/${pl?._id}`)}>
                Update
              </button>
              <img
                alt="delete-img"
                src="/images/delete.png"
                style={{ height: "25px", cursor: "pointer" }}
                onClick={() => deletePlayers(pl?._id)}
              />
            </div>
          </div>
        ))}

      <h2 style={{ textAlign: "center", marginTop: "70px" }}>South Players</h2>
      {southP?.length > 0 &&
        southP?.map((pl) => (
          <div key={pl?._id}>
            <h4 style={{ textAlign: "center" }}>Player Name:</h4>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
              }}
            >
              <span style={{ margin: "0px", minWidth: "150px" }}>
                {pl?.firstName + " " + pl?.lastName}
              </span>
              <button onClick={() => navigate(`/add-player/${pl?._id}`)}>
                Update
              </button>
              <img
                alt="delete-img"
                src="/images/delete.png"
                style={{ height: "25px", cursor: "pointer" }}
                onClick={() => deletePlayers(pl?._id)}
              />
            </div>
          </div>
        ))}
      <Loader loading={loading} />
    </div>
  );
};

export default UpdatePlayer;
