import React from "react";
import { useNavigate } from "react-router-dom";

const UpdatePlayer = () => {
  const northPlyers = [...JSON.parse(localStorage.getItem("NORTH"))];

  const southPlayers = [...JSON.parse(localStorage.getItem("SOUTH"))];
  let navigate = useNavigate();

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
      {northPlyers?.length > 0 &&
        northPlyers?.map((pl) => (
          <div>
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
            </div>
          </div>
        ))}

      <h2 style={{ textAlign: "center", marginTop: "70px" }}>South Players</h2>
      {southPlayers?.length > 0 &&
        southPlayers?.map((pl) => (
          <div>
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
            </div>
          </div>
        ))}
    </div>
  );
};

export default UpdatePlayer;
