import React from "react";
import styles from "./style.module.css";

const PointWithName = ({
  color,
  name = [],
  point = "3up",
  position = "left",
}) => {
  console.log({ name });
  return (
    <div className={styles.pointNameWrap}>
      {position === "left" && <div className={styles.point}>{point}</div>}
      <div style={{ background: color }} className={styles.playerName}>
        {name?.map(
          (nam, index) =>
            `${nam} ${index === 0 && name?.length > 1 ? "/ " : ""}`
        )}
      </div>
      {position === "right" && <div className={styles.point}>{point}</div>}
    </div>
  );
};

export default PointWithName;
