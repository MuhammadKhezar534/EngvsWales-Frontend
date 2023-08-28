import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";

const Team = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className={styles.logoWrap}>
        <div>
          <div className={styles.title}>Please choose </div>
          <div className={styles.title}>a Team</div>
        </div>
        <img src="/images/logo.png" alt="logo" />
      </div>
      <div className={styles.teamWrap}>
        <div onClick={() => navigate("/teams/north")} className={styles.bg}>
          <div className={styles.teamName}>Team North</div>
          <div className={styles.subText}>See the players for Team North</div>
        </div>
        <div
          onClick={() => navigate("/teams/south")}
          className={styles.bgSouth}
        >
          <div className={styles.teamName}>Team South</div>
          <div className={styles.subText}>See the players for Team South</div>
        </div>
      </div>
    </div>
  );
};

export default Team;
