import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import "./styles.css";

const Results = () => {
  let navigate = useNavigate();
  return (
    <div className={styles.cCtn}>
      {/* <TopBar title="Results" /> */}
      <h1>Results</h1>
      <div
        onClick={() => navigate("/sunday-fixtures")}
        className={styles.cICtn}
      >
        <img src="/images/fOURBALL.jpg" alt="fOURBALL.jpg" />
        <div className={styles.txtC}>Fourballs Fixtures & Results</div>
      </div>
      <div onClick={() => navigate("/monday-fixtures")} className="c-tn">
        <img src="/images/Singles.jpg" alt="Singles.jpg" />
        <div className={styles.txtC}>Signles Fixtures & Results</div>
      </div>
    </div>
  );
};

export default Results;
