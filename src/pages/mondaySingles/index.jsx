import React from "react";
import PageHeader from "../../components/pageHeader";

import styles from "./styles.module.css";
import ScoreBox from "../../components/scoreBox";
import PointWithName from "../../components/pointWithName";
import Winner from "../../components/winner";

const MondaySingles = () => {
  return (
    <div>
      <PageHeader title={"Monday Singles"} />
      <div className={styles.scoreWrap}>
        <ScoreBox score={"10 & 1/2"} name="North" color={"#FF8C8C"} />
        <ScoreBox score={"7 & 1/2"} name="South" color={"#8CA5FF"} />
      </div>
      <div className={styles.namePointWrap}>
        <div className={styles.col}>
          <PointWithName color={"#141B34"} name="John" position="right" />
          <PointWithName color={"#141B34"} name="John" position="right" />
          <PointWithName color={"#141B34"} name="John" position="right" />
          <PointWithName color={"#141B34"} name="John" position="right" />
          <PointWithName color={"#141B34"} name="John" position="right" />
          <PointWithName color={"#141B34"} name="John" position="right" />
          <PointWithName color={"#141B34"} name="John" position="right" />
          <PointWithName color={"#141B34"} name="John" position="right" />
          <PointWithName color={"#141B34"} name="John" position="right" />
          <PointWithName color={"#141B34"} name="John" position="right" />
          <PointWithName color={"#141B34"} name="John" position="right" />
          <PointWithName color={"#141B34"} name="John" position="right" />
        </div>
        <div className={styles.col}>
          <PointWithName color={"#8CA5FF"} name="Alaan" position="left" />
          <PointWithName color={"#8CA5FF"} name="Alaan" position="left" />
          <PointWithName color={"#8CA5FF"} name="Alaan" position="left" />
          <PointWithName color={"#8CA5FF"} name="Alaan" position="left" />
          <PointWithName color={"#8CA5FF"} name="Alaan" position="left" />
          <PointWithName color={"#8CA5FF"} name="Alaan" position="left" />
          <PointWithName color={"#8CA5FF"} name="Alaan" position="left" />
          <PointWithName color={"#8CA5FF"} name="Alaan" position="left" />
          <PointWithName color={"#8CA5FF"} name="Alaan" position="left" />
          <PointWithName color={"#8CA5FF"} name="Alaan" position="left" />
          <PointWithName color={"#8CA5FF"} name="Alaan" position="left" />
          <PointWithName color={"#8CA5FF"} name="Alaan" position="left" />
        </div>
      </div>
      <Winner
        text={"Team North Win 10 1/2 Points to  7 1/22 Points over Team South"}
      />
    </div>
  );
};

export default MondaySingles;
