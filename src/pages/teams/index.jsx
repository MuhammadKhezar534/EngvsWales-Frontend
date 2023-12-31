import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";

const Team = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.teamCont}>
      <div className={styles.logoWrap}>
        <div>
          <div className={styles.title}>Please choose a Team</div>
        </div>
        <img src="/images/logo.png" alt="logo" />
      </div>
      <div className={styles.teamWrap}>
        <div className={styles.bckImg} onClick={() => navigate("/teams/north")}>
          <div className={styles.imgW}>
            <div className={styles.teamName}>Team England</div>
            <div className={styles.subText}>
              See the players for Team England
            </div>
          </div>
        </div>
        <div
          className={styles.bckImg + " " + styles.imgS}
          onClick={() => navigate("/teams/south")}
        >
          <div className={styles.imgW}>
            <div className={styles.teamName}>Team Wales</div>
            <div className={styles.subText}>See the players for Team Wales</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
