import React from "react";
import PageHeader from "../../components/pageHeader";

import styles from "./styles.module.css";
import ScoreBox from "../../components/scoreBox";
import PointWithName from "../../components/pointWithName";

const SundayFourBalls = () => {
  return (
    <div>
      <PageHeader title={"Sunday Fourballs"} />
      <div className={styles.scoreWrap}>
        <ScoreBox score={3} name="North" color={"#FF8C8C"} />
        <ScoreBox score={3} name="South" color={"#8CA5FF"} />
      </div>
      <div className={styles.namePointWrap}>
        <div className={styles.col}>
          <PointWithName color={"#141B34"} position="right" />
          <PointWithName color={"#141B34"} position="right" />
          <PointWithName color={"#141B34"} position="right" />
          <PointWithName color={"#141B34"} position="right" />
          <PointWithName color={"#141B34"} position="right" />
          <PointWithName color={"#141B34"} position="right" />
        </div>
        <div className={styles.col}>
          <PointWithName color={"#8CA5FF"} position="left" />
          <PointWithName color={"#8CA5FF"} position="left" />
          <PointWithName color={"#8CA5FF"} position="left" />
          <PointWithName color={"#8CA5FF"} position="left" />
          <PointWithName color={"#8CA5FF"} position="left" />
          <PointWithName color={"#8CA5FF"} position="left" />
        </div>
      </div>
    </div>
  );
};

export default SundayFourBalls;
