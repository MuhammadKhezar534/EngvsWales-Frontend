import React from "react";
import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";
const PlayerCard = ({
  playerBio,
  firstName,
  lastName,
  isCaptain,
  _id,
  team = "north",
  isInfo = true,
}) => {
  const navigate = useNavigate();
  return (
    <div className={styles.playerCardWrap}>
      <div className={styles.imgWrap}>
        <img src="/images/user-icon.png" alt="player" />
      </div>
      <div className={styles.playerData}>
        <div className={styles.cardPlayerName}>
          {firstName + " " + lastName} {isCaptain ? "-Captain" : ""}
        </div>
        <div className={styles.playerBio}>{playerBio}</div>
        {isInfo && (
          <div
            onClick={() => navigate(`/teams/${team}/${_id}`)}
            className={styles.moreInfo}
          >
            More Info
          </div>
        )}
      </div>
    </div>
  );
};

export default PlayerCard;
