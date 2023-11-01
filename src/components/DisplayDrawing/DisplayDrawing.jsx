import React from "react";
import styles from "./DisplayDrawing.module.scss";
// import useMatchMedia from "../../hooks/useMatchMedia";

import store from "../../store/store";
import { observer } from "mobx-react-lite";
import DisplayPairWrapper from "../DisplayPairWrapper";
import useDisplayPairVisibility from "../../hooks/useDisplayPairVisibility";

const DisplayDrawing = observer(() => {
  const { splitedDays, splitedHours, splitedMinutes, splitedSeconds } =
    store.splitedTime;

  const { isDays, isHour, isMinute } = useDisplayPairVisibility();

  return (
    <div className={styles.wrapper}>
      <div className={styles.displays_body}>
        {isDays && (
          <DisplayPairWrapper
            value={splitedDays}
            title="days"
            isDotter={true}
          />
        )}
        {isHour && (
          <DisplayPairWrapper
            value={splitedHours}
            title="hours"
            isDotter={true}
          />
        )}

        {isMinute && (
          <DisplayPairWrapper
            value={splitedMinutes}
            title="minutes"
            isDotter={true}
          />
        )}

        <DisplayPairWrapper
          value={splitedSeconds}
          title="seconds"
          isDotter={false}
        />

        <div className={styles.wrapper_display}></div>
      </div>
    </div>
  );
});

export default DisplayDrawing;
