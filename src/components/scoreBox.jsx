import { isDecimal } from "../utilities/function";
import styles from "./style.module.css";
const ScoreBox = ({ score, color, name }) => {
  return (
    <div className={styles.col}>
      <div className={styles.name}>{name}</div>
      <div style={{ background: color }} className={styles.scoreBox}>
        {!isDecimal(score) ? score : `${Math.floor(score)} & 1/2`}
      </div>
    </div>
  );
};

export default ScoreBox;
