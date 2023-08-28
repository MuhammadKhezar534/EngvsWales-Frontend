import React from "react";
import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";

const PageHeader = ({ title, showLogo }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.headerWrap}>
      <img
        src="/images/back-arrow.png"
        onClick={() => navigate(-1)}
        alt="back"
        className={styles.backArrow}
      />
      <div className={styles.headerTitle}>{title}</div>
      {showLogo && (
        <img src="/images/logo.png" className={styles.headerLogo} alt="logo" />
      )}
    </div>
  );
};

export default PageHeader;
