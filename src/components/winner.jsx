import React from "react";
import styles from "./style.module.css";
const Winner = ({ text }) => {
  return (
    <div className={styles.winnerWrap}>
      <div className={styles.winnerText}>{text}</div>
      <img src="/images/cup.png" alt="trophy" />
    </div>
  );
};

export default Winner;
