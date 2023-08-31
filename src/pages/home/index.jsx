import { useNavigate } from "react-router-dom";
import ScoreBox from "../../components/scoreBox";
import styles from "./style.module.css";
import { getGames, getPlayersList } from "../../apis/api";
import { errThrough, parseScore } from "../../utilities/function";
import { useEffect, useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [teamFinalScores, setScores] = useState({});

  useEffect(() => {
    getTeams("NORTH");
    getTeams("SOUTH");
    getgames();
  }, []);

  const getTeams = (teamType) => {
    getPlayersList(teamType)
      .then((resp) => {
        localStorage.setItem(teamType, JSON.stringify(resp?.data));
      })
      .catch((err) => {
        errThrough(err);
      });
  };

  const getgames = () => {
    getGames("SUNDAY_FOURBALLS")
      .then((resp) => {
        const scores = parseScore(resp?.data);
        setScores(scores);
      })
      .catch((err) => {
        errThrough(err);
      });
  };
  console.log({ teamFinalScores });

  return (
    <div>
      <div className={styles.logoWrap}>
        <div>
          <div className={styles.title}>
            Welcome to the DGA North Vs South 2023
          </div>
        </div>
        <img src="/images/logo.png" alt="logo" />
      </div>
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
      {teamFinalScores?.northScore < 0 && teamFinalScores?.southScore > 0 && (
        <div className={styles.matchName}>After Sunday Fourballs</div>
      )}{" "}
      <div className={styles.scoreWrap}>
        <img
          className={styles.matchImg}
          src="/images/sunday-fixtures.png"
          alt="matches"
          onClick={() => navigate("/sunday-fixtures")}
        />
        <img
          className={styles.matchImg}
          src="/images/monday-fixtures.png"
          alt="matches"
          onClick={() => navigate("/monday-fixtures")}
        />
      </div>
    </div>
  );
};

export default Home;
