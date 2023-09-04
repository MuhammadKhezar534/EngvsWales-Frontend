import React from "react";
import { useNavigate } from "react-router-dom";

const UpdatePlayer = () => {
  const plyers = [
    ...JSON.parse(localStorage.getItem("NORTH")),
    ...JSON.parse(localStorage.getItem("SOUTH")),
  ];

  let navigate = useNavigate();
  //   //   useEffect(() => {
  //   //     getTeams("NORTH");
  //   //     getTeams("SOUTH");
  //   //   }, []);

  //   //   const getTeams = (teamType) => {
  //   //     getPlayersList(teamType)
  //   //       .then((resp) => {
  //   //         console.log({ resp });
  //   //         setPlayer((prev) => [...prev, ...resp?.data]);
  //   //       })
  //   //       .catch((err) => {
  //   //         errThrough(err);
  //   //       });
  //   //   };

  //   console.log({ plyers: plyers?.sort((a, b) => a._id - b._id) });
  return (
    <div style={{ textAlign: "left" }}>
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
