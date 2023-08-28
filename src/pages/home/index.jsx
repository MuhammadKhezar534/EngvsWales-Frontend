import { useNavigate } from "react-router-dom";
import ScoreBox from "../../components/scoreBox";
import styles from "./style.module.css";
import { getPlayersList } from "../../apis/api";
import { errThrough } from "../../utilities/function";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    getTeams("NORTH");
    getTeams("SOUTH");
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
        <ScoreBox score={8} name="North" color={"#FF8C8C"} />
        <ScoreBox score={4} name="South" color={"#8CA5FF"} />
      </div>
      <div className={styles.matchName}>After Sunday Fourballs</div>
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
