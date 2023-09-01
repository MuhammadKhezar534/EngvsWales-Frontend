import React from "react";
import styles from "./style.module.css";

const Venues = () => {
  return (
    <div>
      <div className={styles.logoWrap}>
        <div>
          <div className={styles.title}>Welcome to Hill Valley Golf Club</div>
        </div>
        <img src="/images/logo.png" alt="logo" />
      </div>

      <div
        className={styles.vBox}
        onClick={() =>
          window.open(
            "https://www.macdonaldhotels.co.uk/hill-valley?gclid=05606a4c63841f06aab30eab025284c0&gclsrc=3p.ds&utm_source=bing&utm_medium=cpc&utm_campaign=Search_Hotels_Brand_Hill%20Valley&utm_term=hill%20valley&utm_content=Brand_Hill%20Valley",
            "_blank"
          )
        }
      >
        <div className={styles.headMa}>
          <div className={styles.mainHead}>Hill Valley Golf Club</div>
          <div className={styles.legend}>
            its unique 47 holes layouts, comprising of a trio of testing nine
            hole circuit
          </div>
        </div>
      </div>

      <div className={styles.txtBx}>
        <div className={styles.inTxt}>Hill Valley Golf Club</div>
        <div className={styles.sInnTxP}>
          Set within the glorious north Shropshire countryside, complemented by
          the smooth greens of our very own golf club, Hill Valley Golf and Spa
          Hotel offers a tranquil base and fabulous facilities – perfect for a
          break with family or friends and all within easy reach of the A41 and
          A49 intersection, half a mile from Whitchurch Town Centre.
        </div>
      </div>
    </div>
  );
};
<img src="/images/venue2.png" alt="venu-img" />;

export default Venues;
