import { useEffect } from "react";
import { isDecimal } from "../utilities/function";
import styles from "./style.module.css";
const ScoreBox = ({ score, name }) => {
  return (
    <div className={name !== "South" ? styles.col : styles.col2}>
      <div className={styles.name}>{name}</div>
      <div className={styles.scoreBox}>
        {!isDecimal(score)
          ? score
          : `${Math.floor(score) > 0 ? `${Math.floor(score)} & 1/2` : "1/2"}`}
      </div>
    </div>
  );
};

export default ScoreBox;
