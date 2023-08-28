import { useLocation, useNavigate } from "react-router-dom";
import styles from "../style.module.css";
import HomeIcon from "./homeIcon";
import MatchIcon from "./matchIcon";
import TeamIcon from "./teamsIcon";
import VenueIcon from "./venueIcon";
import UserIcon from "./userIcon";

const BottomMenu = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className={styles.bottomMenuWrap}>
      <span className={styles.pointer} onClick={() => navigate("/")}>
        <HomeIcon color={pathname === "/" ? "#65C955" : "#141B34"} />
      </span>
      <span className={styles.pointer} onClick={() => navigate("/teams")}>
        <TeamIcon color={pathname === "/teams" ? "#65C955" : "#141B34"} />
      </span>
      <span className={styles.pointer} onClick={() => navigate("/matches")}>
        <MatchIcon color={pathname === "/matches" ? "#65C955" : "#141B34"} />
      </span>
      <span className={styles.pointer} onClick={() => navigate("/venues")}>
        <VenueIcon color={pathname === "/venues" ? "#65C955" : "#141B34"} />
      </span>
      <span className={styles.pointer} onClick={() => navigate("/login")}>
        <UserIcon color={pathname === "/login" ? "#65C955" : "#141B34"} />
      </span>
    </div>
  );
};

export default BottomMenu;
