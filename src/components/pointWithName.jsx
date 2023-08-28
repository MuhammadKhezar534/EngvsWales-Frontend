import React from "react";
import styles from "./style.module.css";

const PointWithName = ({
  color,
  name = "John / Dan",
  point = "3up",
  position = "left",
}) => {
  return (
    <div className={styles.pointNameWrap}>
      {position === "left" && <div className={styles.point}>{point}</div>}
      <div style={{ background: color }} className={styles.playerName}>
        {name}
      </div>
      {position === "right" && <div className={styles.point}>{point}</div>}
    </div>
  );
};

export default PointWithName;
