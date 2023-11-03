import React from "react";
import styles from "./DisplayDrawing.module.scss";
import store from "../../store/store";
import { observer } from "mobx-react-lite";
import DisplayPairWrapper from "../DisplayPairWrapper";
import useDotterSplitVisibility from "../../hooks/useDotterSplitVisibility/useDotterSplitVisibility";

const DisplayDrawing = observer(() => {
  const { splitedDays, splitedHours, splitedMinutes, splitedSeconds } =
    store.splitedTime;

  const { isDays, isHour, isMinute } = store.displayVisibility;

  const { isHourDotter, isMinuteDotter } = useDotterSplitVisibility();

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
            isDotter={isHourDotter}
          />
        )}

        {isMinute && (
          <DisplayPairWrapper
            value={splitedMinutes}
            title="minutes"
            isDotter={isMinuteDotter}
          />
        )}

        <DisplayPairWrapper
          value={splitedSeconds}
          title="seconds"
          isDotter={false}
        />
      </div>
    </div>
  );
});

export default DisplayDrawing;
