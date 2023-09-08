import React from "react";
import PageHeader from "../../components/pageHeader";
import PlayerCard from "../../components/playerCard";

import styles from "./style.module.css";
import { useParams } from "react-router-dom";
import { getPlayerDetail } from "../../utilities/function";

const PlayerDetails = ({ title, team }) => {
  const { id } = useParams();

  const detail = getPlayerDetail(team, id);

  console.log({ id, detail });

  return (
    <div style={{ marginBottom: "100px" }}>
      <PageHeader showLogo={true} title={title} />
      <PlayerCard isInfo={false} {...detail} />
      <div className={styles.statsWrap}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.statName}>Home Course</div>
            <div className={styles.statValue}>{detail?.homeCourse}</div>
          </div>
          <div className={styles.col}>
            <div className={styles.statName}>Favourite Club</div>
            <div className={styles.statValue}>{detail?.favouriteClub}</div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.statName}>Favourite Course</div>
            <div className={styles.statValue}>{detail?.favouriteCourse}</div>
          </div>
          <div className={styles.col}>
            <div className={styles.statName}>DGA Events Played</div>
            <div className={styles.statValue}>{detail?.dgaEvents}</div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.statName}>Top 10 Finishes</div>
            <div className={styles.statValue}>{detail?.topTenFinishes}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerDetails;
