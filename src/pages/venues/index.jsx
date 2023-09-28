import React from "react";
import styles from "./style.module.css";

const Venues = () => {
  return (
    <div>
      <div className={styles.logoWrap}>
        <div>
          <div className={styles.title}>
            Welcome to The Vale Resort Golf Club
          </div>
        </div>
        <img src="/images/logo.png" alt="logo" />
      </div>

      <div className={styles.vBox}>
        <div className={styles.headMa}>
          <div className={styles.mainHead}>The Vale Resort Golf Club</div>
          {/* <div className={styles.legend}>
            its unique 47 holes layouts, comprising of a trio of testing nine
            hole circuit
          </div> */}
        </div>
      </div>

      <div className={styles.iCtnT}>
        <div
          className={styles.contImg}
          onClick={() =>
            window.open("https://www.valeresort.com/golf/", "_blank")
          }
        >
          <img src="/images/image11.png" alt="png-i" />
        </div>

        <div className={styles.txtBx}>
          <div className={styles.inTxt}>The Vale Resort Golf Club</div>
          <div className={styles.sInnTxP}>
            Yes, golf should be a challenge, but at the Vale Resort we believe
            it should also be fun. Whether visiting on a corporate golf day or
            perfecting your technique on a golfing break, it’s rare to find a
            golfer who has not been left just a little smitten after a round on
            either of our two championship golf courses. We’ve hosted
            everything, from PGA and European golf championships to charity
            days, company events to golf enthusiast society days. Our
            professional team understand what makes an exceptional golfing
            experience. We’ll take care of it all, leaving you free to
            concentrate on your swing. After play, escape to the 19th hole - our
            warm and friendly clubhouse – where you can review that memorable
            shot that makes the day worthwhile. If you want to look the part,
            check out the deals at our pro shop.
          </div>
        </div>
      </div>

      <div className={styles.imgsRow}>
        <div className={styles.inIm}>
          <img src="/images/wale2.jpg" alt="16148996.jpg" />
        </div>
        <div className={styles.inIm}>
          <img src="/images/wale3.jpg" alt="16148996.jpg" />
        </div>
      </div>
    </div>
  );
};
<img src="/images/venue2.png" alt="venu-img" />;

export default Venues;
