import React, { useEffect, useState } from "react";
import PageHeader from "../../components/pageHeader";

import styles from "./styles.module.css";
import ScoreBox from "../../components/scoreBox";
import PointWithName from "../../components/pointWithName";
import { getGames } from "../../apis/api";
import { errThrough, parseScore } from "../../utilities/function";

const SundayFourBalls = () => {
  const [games, setGames] = useState([]);
  const [teamFinalScores, setScores] = useState({});
  const getgames = () => {
    getGames("SUNDAY_FOURBALLS")
      .then((resp) => {
        setGames(resp?.data);
        const scores = parseScore(resp?.data);
        setScores(scores);
      })
      .catch((err) => {
        errThrough(err);
      });
  };

  useEffect(() => {
    getgames();
  }, []);

  console.log({ teamFinalScores });

  return (
    <div>
      <PageHeader title={"Sunday Fourballs"} />
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
    </div>
  );
};

export default SundayFourBalls;
