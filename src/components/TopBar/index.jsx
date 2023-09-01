import React from "react";
import styles from "./styles.module.css";

const TopBar = ({ title }) => {
  return (
    <div className={styles.topBar}>
      <span>{title}</span>
    </div>
  );
};

export default TopBar;
