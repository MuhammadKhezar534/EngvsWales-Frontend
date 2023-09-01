import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import TopBar from "../../components/TopBar";
import "./styles.css";

const Results = () => {
  let navigate = useNavigate();
  return (
    <div className={styles.cCtn}>
      <TopBar title="Results" />
      <div
        onClick={() => navigate("/sunday-fixtures")}
        className={styles.cICtn}
      >
        <img src="/images/nDark.jpg" alt="nDark.jpg" />
        <div className={styles.txtC}>Sunday Fixtures & Results</div>
      </div>
      <div onClick={() => navigate("/monday-fixtures")} className="c-tn">
        <img src="/images/sDark.jpg" alt="sDark.jpg" />
        <div className={styles.txtC}>Monday Fixtures & Results</div>
      </div>
    </div>
  );
};

export default Results;
