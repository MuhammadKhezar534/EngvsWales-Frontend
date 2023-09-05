import React, { useEffect, useState } from "react";
import PageHeader from "../../components/pageHeader";

import styles from "./styles.module.css";
import ScoreBox from "../../components/scoreBox";
import PointWithName from "../../components/pointWithName";
import Winner from "../../components/winner";
import { getGames } from "../../apis/api";
import { errThrough, parseScore } from "../../utilities/function";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router-dom";

const MondaySingles = () => {
  const [games, setGames] = useState([]);
  const [teamFinalScores, setScores] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const getgames = () => {
    setLoading(true);
    getGames("MONDAY_SINGLES")
      .then((resp) => {
        setGames(resp?.data);
        const scores = parseScore(resp?.data);
        setScores(scores);
        setLoading(false);
      })
      .catch((err) => {
        errThrough(err, navigate);
        setLoading(false);
      });
  };

  useEffect(() => {
    getgames();
  }, []);

  return (
    <div style={{ marginBottom: "160px" }}>
      <PageHeader title={"Monday Singles"} />
      <div className={styles.scoreWrap}>
        <ScoreBox
          name="North"
          color={"#FF8C8C"}
          score={teamFinalScores?.northScore}
        />
        <ScoreBox
          name="South"
          color={"#8CA5FF"}
          score={teamFinalScores?.southScore}
        />
      </div>
      <div className={styles.namePointWrap}>
        <div className={styles.col}>
          {games?.map((game) => (
            <PointWithName
              key={game?._id}
              color="#141B34"
              position="right"
              point={game?.northScore}
              name={game?.northPlayers}
            />
          ))}
        </div>
        <div className={styles.col}>
          {games?.map((game) => (
            <PointWithName
              key={game?._id + "a"}
              color="#8CA5FF"
              position="left"
              point={game?.southScore}
              name={game?.southPlayers}
            />
          ))}
        </div>
      </div>

      {games?.length > 11 && (
        <Winner
          // text={"Team North Win 10 1/2 Points to  7 1/22 Points over Team South"}
          text={teamFinalScores?.winner + " team win."}
        />
      )}
      <Loader loading={loading} />
    </div>
  );
};

export default MondaySingles;
