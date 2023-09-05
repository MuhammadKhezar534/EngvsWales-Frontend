import React from "react";
import { useNavigate } from "react-router-dom";

const UpdatePlayer = () => {
  const plyers = [
    ...JSON.parse(localStorage.getItem("NORTH")),
    ...JSON.parse(localStorage.getItem("SOUTH")),
  ];
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
      {plyers?.length > 0 &&
        plyers?.map((pl) => (
          <div>
            <h3>Player Name:</h3>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
              }}
            >
              <span style={{ margin: "0px" }}>
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
