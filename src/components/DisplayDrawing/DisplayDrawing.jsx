import React from "react";
import styles from "./DisplayDrawing.module.scss";
import store from "../../store/store";
import { observer } from "mobx-react-lite";
import DisplayPairWrapper from "../DisplayPairWrapper";
import useDisplayPairVisibility from "../../hooks/useDisplayPairVisibility";
import useDotterSplitVisibility from "../../hooks/useDotterSplitVisibility/useDotterSplitVisibility";
import useMachMedia from "../../hooks/useMatchMedia";

const DisplayDrawing = observer(() => {
  const { splitedDays, splitedHours, splitedMinutes, splitedSeconds } =
    store.splitedTime;

  const displRef = React.useRef();

  const { isDays, isHour, isMinute } = useDisplayPairVisibility();

  const { isMobile, isTablet } = useMachMedia();

  const { isHourDotter, isMinuteDotter } = useDotterSplitVisibility(
    displRef,
    isMobile,
    isTablet
  );

  return (
    <div className={styles.wrapper}>
      <div ref={displRef} className={styles.displays_body}>
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
