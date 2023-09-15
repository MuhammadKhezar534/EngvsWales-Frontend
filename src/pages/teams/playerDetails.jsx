import React, { useEffect, useState } from "react";
import PageHeader from "../../components/pageHeader";
import PlayerCard from "../../components/playerCard";

import styles from "./style.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { errThrough, getPlayerDetail } from "../../utilities/function";
import { getPlayersList } from "../../apis/api";
import Loader from "../../components/Loader";

const PlayerDetails = ({ title, team }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [detail, setDetail] = useState({});

  useEffect(() => {
    setLoading(true);
    getTeams(team);
    // eslint-disable-next-line
  }, []);

  const getTeams = (teamType) => {
    getPlayersList(teamType)
      .then((resp) => {
        console.log({ resp });
        localStorage.setItem(teamType, JSON.stringify(resp?.data));
        const detail = getPlayerDetail(team, id, resp?.data);
        setDetail(detail);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);

        errThrough(err, navigate);
      });
  };

  return (
    <div style={{ marginBottom: "100px" }}>
      <PageHeader showLogo={true} title={title} />
      <PlayerCard isInfo={false} {...detail} />
      <div className={styles.statsWrap}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.statName}>Home Course</div>
            <div className={styles.statValue}>{detail?.homeCourse ?? ""}</div>
          </div>
          <div className={styles.col}>
            <div className={styles.statName}>Favourite Club</div>
            <div className={styles.statValue}>
              {detail?.favouriteClub ?? ""}
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.statName}>Favourite Course</div>
            <div className={styles.statValue}>
              {detail?.favouriteCourse ?? ""}
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.statName}>DGA Events Played</div>
            <div className={styles.statValue}>{detail?.dgaEvents ?? ""}</div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.statName}>Top 10 Finishes</div>
            <div className={styles.statValue}>
              {detail?.topTenFinishes ?? ""}
            </div>
          </div>
        </div>
      </div>
      <Loader loading={loading} />
    </div>
  );
};

export default PlayerDetails;
