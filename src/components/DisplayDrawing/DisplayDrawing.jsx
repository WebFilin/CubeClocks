import React from "react";
import styles from "./DisplayDrawing.module.scss";
// import useMatchMedia from "../../hooks/useMatchMedia";

import store from "../../store/store";
import { observer } from "mobx-react-lite";
import DisplayPairWrapper from "../DisplayPairWrapper";

const DisplayDrawing = observer(() => {
  const { days, hours, minutes, seconds } = store.splitedTime;

  return (
    <div className={styles.wrapper}>
      <div className={styles.displays_body}>
        <DisplayPairWrapper value={days} title="days" isDotter={true} />
        <DisplayPairWrapper value={hours} title="hours" isDotter={true} />
        <DisplayPairWrapper value={minutes} title="minutes" isDotter={true} />
        <DisplayPairWrapper value={seconds} title="seconds" isDotter={false} />

        <div className={styles.wrapper_display}></div>
      </div>
    </div>
  );
});

export default DisplayDrawing;
